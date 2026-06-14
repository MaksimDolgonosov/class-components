import { memo, useMemo, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { Country } from '../../types';
import { CountryCard } from '../country-card/country-card';
import { getPopulationForYear, createYearDataMap } from '../../utils/data-transformers';

import styles from './country-list.module.css';

const ESTIMATED_CARD_HEIGHT = 280;
const CARD_GAP = 16;

type CountryListProps = {
  countries: Country[];
  searchQuery: string;
  selectedColumns: string[];
  selectedRegion: string;
  selectedYear: number;
  sortField: 'name' | 'population';
  sortOrder: 'asc' | 'desc';
};

export const CountryList = memo(
  ({
    countries,
    searchQuery,
    selectedColumns,
    selectedRegion,
    selectedYear,
    sortField,
    sortOrder,
  }: CountryListProps) => {
    const parentRef = useRef<HTMLDivElement>(null);

    const filteredCountries = useMemo(() => {
      const query = searchQuery.toLowerCase();

      const filtered = countries.filter((c) => {
        const matchesSearch = c.id.toLowerCase().includes(query);
        const matchesRegion = !selectedRegion || c.data.some((d) => d.region === selectedRegion);
        return matchesSearch && matchesRegion;
      });

      if (sortField === 'name') {
        return [...filtered].sort((a, b) =>
          sortOrder === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)
        );
      }

      const withPopulation = filtered.map((c) => ({
        country: c,
        population: getPopulationForYear(createYearDataMap(c.data), selectedYear) || 0,
      }));

      withPopulation.sort((a, b) =>
        sortOrder === 'asc' ? a.population - b.population : b.population - a.population
      );

      return withPopulation.map(({ country }) => country);
    }, [countries, searchQuery, selectedRegion, selectedYear, sortField, sortOrder]);

    const virtualizer = useVirtualizer({
      count: filteredCountries.length,
      getScrollElement: () => parentRef.current,
      estimateSize: () => ESTIMATED_CARD_HEIGHT,
      gap: CARD_GAP,
      overscan: 5,
    });

    return (
      <div ref={parentRef} className={styles.scrollContainer}>
        <div
          className={styles.virtualList}
          style={{ height: `${virtualizer.getTotalSize()}px` }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => {
            const country = filteredCountries[virtualItem.index];

            return (
              <div
                key={country.id}
                data-index={virtualItem.index}
                ref={virtualizer.measureElement}
                className={styles.virtualItem}
                style={{ transform: `translateY(${virtualItem.start}px)` }}
              >
                <CountryCard
                  country={country}
                  selectedYear={selectedYear}
                  selectedColumns={selectedColumns}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
