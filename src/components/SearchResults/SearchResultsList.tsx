import { getTranslations } from 'next-intl/server';
import { PokemonDescription } from '../../types/types';
import PokemonItem from '../PokemonItem/PokemonItem';
import './search-results-list.scss';

type SearchResultsListProps = {
  data: PokemonDescription[];
  page: number;
  search: string;
};

const SearchResultsList = async ({
  data,
  page,
  search,
}: SearchResultsListProps) => {
  const t = await getTranslations('results');

  return (
    <div className="results">
      <div className="pokemon-list">
        {data.length > 0 ? (
          data.map((pokemon) => (
            <PokemonItem
              key={pokemon.name}
              {...pokemon}
              page={page}
              search={search}
            />
          ))
        ) : (
          <p className="no-results">{t('empty')}</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsList;
