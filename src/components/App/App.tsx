'use client';

import { useState, useEffect, useContext, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '../../i18n/navigation';
import TopControls from '../TopControls/TopControls';
import Results from '../Results/Results';
import { IThemeContext, PokemonState } from '../../types/types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Pagination from '../Pagination/Pagination';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import useLocalStorage from '../../hooks/useLocalStorage';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setPokemons } from '../../store/pokemonSlice';
import { useGetPokemonsListQuery } from '../../api/apiSlice';
import { formatQueryError } from '../helpers/formatQueryError';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import DownloadCsvButton from '../DownloadCsvButton/DownloadCsvButton';
import './app.scss';

type AppProps = {
  children: React.ReactNode;
};

const buildPageUrl = (offset: number, pokemon?: string | null) => {
  const params = new URLSearchParams();
  params.set('page', String(Math.floor(offset / 10) + 1));

  if (pokemon) {
    params.set('pokemon', pokemon);
    return `/pokemon?${params.toString()}`;
  }

  return `/?${params.toString()}`;
};

function AppContent({ children }: AppProps) {
  const t = useTranslations('app');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { pokemon, setPokemon } = useLocalStorage('pokemon', '');
  const [forceRtkError, setForceRtkError] = useState(false);
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const { pokemons: selectedPokemons } = useAppSelector(
    (state) => state.pokemons
  );
  const dispatch = useAppDispatch();

  const page = Math.max(1, Number(searchParams?.get('page') ?? '1'));
  const offset = (page - 1) * 10;

  const [state, setState] = useState<
    Omit<PokemonState, 'offset' | 'pokemonId'>
  >({
    pokemon,
    errorTest: false,
    limit: 10,
  });

  const { data, isFetching, error, refetch } = useGetPokemonsListQuery({
    limit: state.limit,
    offset,
    forceError: forceRtkError,
  });

  const pokemons = data?.results ?? [];
  const next = data?.next ?? null;
  const previous = data?.previous ?? null;
  const errorMessage = formatQueryError(error);

  useEffect(() => {
    setState((prev) => ({ ...prev, pokemon }));
  }, [pokemon]);

  useEffect(() => {
    if (!searchParams?.get('page')) {
      router.replace('/?page=1');
    }
  }, [router, searchParams]);

  const onChangePage = (direction: 'previous' | 'next') => {
    if (previous === null && direction === 'previous') {
      return;
    }

    let newOffset = offset;

    if (direction === 'previous') {
      newOffset = Math.max(0, offset - 10);
    } else if (direction === 'next' && next) {
      newOffset = offset + 10;
    } else {
      return;
    }

    const pokemonName = pathname?.endsWith('/pokemon')
      ? searchParams?.get('pokemon')
      : null;

    router.push(buildPageUrl(newOffset, pokemonName));
  };

  const handleSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim();
    if (trimmed === pokemon) {
      return;
    }
    setPokemon(trimmed);
    setState((prev) => ({ ...prev, pokemon: trimmed }));
    router.push(buildPageUrl(0));
  };

  const handleErrorTest = () => {
    setState((prev) => ({ ...prev, errorTest: true }));
  };

  const filteredData = pokemons.filter((item) =>
    item.name.toLowerCase().includes(state.pokemon.toLowerCase())
  );

  const handlePokemonClick = (name: string) => {
    router.push(buildPageUrl(offset, name));
  };

  const handleRetryFetch = () => {
    setForceRtkError(false);
    refetch();
  };

  return (
    <div className={`app ${theme}`}>
      <h1 className="title">{t('title')}</h1>
      <br />
      <div className="app-header-actions">
        <button
          className="about-error-test"
          onClick={() => setForceRtkError(true)}
        >
          {t('header.actions.error')}
        </button>
        <button className="about-refetch" onClick={handleRetryFetch}>
          {t('header.actions.refetch')}
        </button>
        <Link href="/about" className="about-button">
          {t('header.actions.about')}
        </Link>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <br />
      <div className="layout">
        <div className="container">
          <TopControls onSearch={handleSearch} placeholder={state.pokemon} />
          <ErrorBoundary>
            <Results
              loading={isFetching}
              data={filteredData}
              error={errorMessage}
              errorTest={state.errorTest}
              onPokemonClick={handlePokemonClick}
              onRetry={handleRetryFetch}
            />
          </ErrorBoundary>
          <Pagination
            loading={isFetching}
            previous={previous}
            next={next}
            offset={Math.floor(offset / 10)}
            onChangePage={onChangePage}
            handleErrorTest={handleErrorTest}
          />
        </div>
        {children}
      </div>
      <div className={`footer ${selectedPokemons.length > 0 ? 'active' : ''}`}>
        <button
          className={`footer-button ${theme}`}
          onClick={() => dispatch(setPokemons([]))}
        >
          {t('footer.pokemon.clear')}
        </button>
        <p>
          {t('footer.pokemon.selected')}
          {selectedPokemons.length}
        </p>
        <DownloadCsvButton
          pokemons={selectedPokemons}
          label={t('footer.pokemon.download')}
          theme={theme}
        />
      </div>
    </div>
  );
}

const App = ({ children }: AppProps) => {
  return (
    <Suspense fallback={null}>
      <AppContent>{children}</AppContent>
    </Suspense>
  );
};

export default App;
