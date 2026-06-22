'use client';

import { useContext, useState, useEffect, ChangeEvent } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '../../i18n/navigation';
import { buildFinderUrl } from '../../lib/finderUrl';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ThemeContext } from '../../providers/ThemeProvider';
import { IThemeContext } from '../../types/types';
import '../TopControls/top-controls.scss';

type SearchControlsProps = {
  initialSearch: string;
};

const SearchControls = ({ initialSearch }: SearchControlsProps) => {
  const t = useTranslations('topControls');
  const router = useRouter();
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const { pokemon, setPokemon } = useLocalStorage('pokemon', '');
  const [search, setSearch] = useState(initialSearch || pokemon);

  useEffect(() => {
    setSearch(initialSearch || pokemon);
  }, [initialSearch, pokemon]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    const trimmed = search.trim();

    if (trimmed === pokemon) {
      router.push(buildFinderUrl({ page: 1, search: trimmed }));
      return;
    }

    setPokemon(trimmed);
    router.push(buildFinderUrl({ page: 1, search: trimmed }));
  };

  return (
    <div className="top-controls">
      <input
        className={`top-controls__input ${theme}`}
        type="text"
        placeholder={t('placeholder')}
        value={search}
        onChange={handleSearch}
      />
      <button
        type="button"
        className={`search-button ${theme}`}
        onClick={handleSearchClick}
      >
        {t('button')}
      </button>
    </div>
  );
};

export default SearchControls;
