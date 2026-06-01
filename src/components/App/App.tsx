import { useState, useEffect, useContext } from 'react';
import TopControls from '../TopControls/TopControls';
import Results from '../Results/Results';
import { IThemeContext, PokemonState } from '../../types/types';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Pagination from '../Pagination/Pagination';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Outlet, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setPokemons } from '../../store/pokemonSlice';
import { useGetPokemonsListQuery } from '../../api/apiSlice';
import { convertToCSV } from '../../utils/convertToCSV';
import { formatQueryError } from '../helpers/formatQueryError';
import './app.scss';

const App = () => {
  const navigate = useNavigate();
  const { pokemon, setPokemon } = useLocalStorage('pokemon', '');
  const [forceRtkError, setForceRtkError] = useState(false);
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const { pokemons: selectedPokemons } = useAppSelector(
    (state) => state.pokemons
  );
  const dispatch = useAppDispatch();

  const [state, setState] = useState<PokemonState>({
    pokemon: pokemon,
    // loading: true,
    // error: null,
    // next: null,
    // previous: null,
    // data: [],
    errorTest: false,
    limit: 10,
    offset: 0,
    pokemonId: null,
  });

  const { data, isFetching, error, refetch } = useGetPokemonsListQuery({
    limit: state.limit,
    offset: state.offset,
    forceError: forceRtkError,
  });

  const pokemons = data?.results ?? [];
  const next = data?.next ?? null;
  const previous = data?.previous ?? null;
  const errorMessage = formatQueryError(error);

  useEffect(() => {
    const params = new URLSearchParams();
    params.set('page', String(state.offset + 1));

    if (state.pokemonId) {
      params.set('pokemon', state.pokemonId);
    }

    navigate(
      {
        pathname: state.pokemonId ? '/pokemon' : '/',
        search: `?${params.toString()}`,
      },
      { replace: true }
    );
  }, [state.offset, state.pokemonId, navigate]);

  useEffect(() => {
    setState((prev) => ({ ...prev, pokemon }));
  }, [pokemon]);

  const onChangePage = (direction: 'previous' | 'next') => {
    if (previous === null && direction === 'previous') {
      return;
    }

    if (direction === 'previous') {
      setState((prev) => ({ ...prev, offset: Math.max(0, prev.offset - 10) }));
    } else if (direction === 'next' && next) {
      setState((prev) => ({ ...prev, offset: prev.offset + 10 }));
    }
  };

  const handleSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim();
    if (trimmed === pokemon) {
      return;
    }
    setPokemon(trimmed);
    setState((prev) => ({ ...prev, offset: 0, pokemon: trimmed }));
  };

  const handleErrorTest = () => {
    setState((prev: PokemonState) => ({ ...prev, errorTest: true }));
  };

  const filteredData = pokemons.filter((item) =>
    item.name.toLowerCase().includes(state.pokemon.toLowerCase())
  );

  const handlePokemonClick = (name: string) => {
    setState((prev) => ({ ...prev, pokemonId: name }));
  };

  const setPokemonId = (pokemonId: string) => {
    setState((prev) => ({ ...prev, pokemonId }));
  };

  const handleRetryFetch = () => {
    setForceRtkError(false);
    refetch();
  };

  const handleDownloadCSV = () => {
    const csv = convertToCSV(selectedPokemons);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pokemons-${selectedPokemons.length}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`app ${theme}`}>
      <h1 className="title">Pokemon finder</h1>
      <br />
      <div className="app-header-actions">
        <button
          className="about-error-test"
          onClick={() => setForceRtkError(true)}
        >
          Error RTK fetch
        </button>
        <button className="about-refetch" onClick={handleRetryFetch}>
          Manual refetch
        </button>
        <button className="about-button" onClick={() => navigate('/about')}>
          About page
        </button>
        <ThemeSwitcher />
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
            offset={Math.floor(state.offset / 10)}
            onChangePage={onChangePage}
            handleErrorTest={handleErrorTest}
          />
        </div>
        <Outlet
          context={{ pokemonId: state.pokemonId, setPokemonId: setPokemonId }}
        />
      </div>
      <div className={`footer ${selectedPokemons.length > 0 ? 'active' : ''}`}>
        <button
          className={`footer-button ${theme}`}
          onClick={() => dispatch(setPokemons([]))}
        >
          Clear selected pokemons
        </button>
        <p>Pokemon selected: {selectedPokemons.length}</p>
        <button
          className={`footer-button ${theme}`}
          onClick={() => handleDownloadCSV()}
        >
          Download on CSV
        </button>
      </div>
    </div>
  );
};

export default App;
