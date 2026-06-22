import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorTestButton from '../ErrorTestButton/ErrorTestButton';
import SearchControls from '../SearchControls/SearchControls';
import SearchResultsList from '../SearchResults/SearchResultsList';
import PaginationLinks from '../PaginationLinks/PaginationLinks';
import ErrorView from '../Error/Error';
import { getTranslations } from 'next-intl/server';
import { fetchPokemonListPage } from '../../lib/pokemonServer';
import {
  FinderSearchParams,
  parseFinderSearchParams,
} from '../../lib/finderUrl';

type SearchResultsColumnProps = {
  searchParams: Promise<FinderSearchParams>;
};

const SearchResultsColumn = async ({
  searchParams,
}: SearchResultsColumnProps) => {
  const params = await searchParams;
  const { page, offset, search, pokemon, forceError } =
    parseFinderSearchParams(params);
  const t = await getTranslations('pagination');

  try {
    const data = await fetchPokemonListPage(10, offset, forceError);
    const filtered = data.results.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <>
        <SearchControls initialSearch={search} />
        <ErrorBoundary>
          <SearchResultsList data={filtered} page={page} search={search} />
          <ErrorTestButton label={t('errorTest')} />
        </ErrorBoundary>
        <PaginationLinks
          page={page}
          hasPrevious={data.previous !== null}
          hasNext={data.next !== null}
          search={search}
          pokemon={pokemon}
        />
      </>
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to load pokemons';

    return (
      <>
        <SearchControls initialSearch={search} />
        <ErrorView error={message} />
        <PaginationLinks
          page={page}
          hasPrevious={false}
          hasNext={false}
          search={search}
          pokemon={pokemon}
        />
      </>
    );
  }
};

export default SearchResultsColumn;
