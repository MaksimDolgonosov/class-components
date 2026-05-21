import { useState, useEffect, useCallback, useContext } from 'react';
import TopControls from '../TopControls/TopControls';
import Results from '../Results/Results';
import { IThemeContext, PokemonState } from '../../types/types';
import getPokemonListWithDescription from '../../services/fetchPokemons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Pagination from '../Pagination/Pagination';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Outlet, useNavigate } from 'react-router-dom';
import './app.scss';
import { ThemeContext } from '../../providers/ThemeProvider';

const App = () => {
  const navigate = useNavigate();
  const { pokemon, setPokemon } = useLocalStorage('pokemon', '');
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const [state, setState] = useState<PokemonState>({
    pokemon: pokemon,
    loading: true,
    error: null,
    next: null,
    previous: null,
    data: [],
    errorTest: false,
    limit: 10,
    offset: 0,
    pokemonId: null,
  });

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

  const getPokemonList = useCallback((url: string) => {
    setState((prev) => ({ ...prev, loading: true }));

    getPokemonListWithDescription(url)
      .then((data) => {
        setState((prev) => ({
          ...prev,
          data: data.results,
          next: data.next,
          previous: data.previous,
          loading: false,
          error: data.errorMessage,
        }));
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          data: [],
          loading: false,
          error: `Server error: ${error.message}`,
        }));
      });
  }, []);

  useEffect(() => {
    getPokemonList('');
  }, [getPokemonList]);

  const onChangePage = (direction: 'previous' | 'next') => {
    if (state.previous === null && direction === 'previous') {
      return;
    }

    if (direction === 'previous' && state.previous) {
      setState((prev) => ({ ...prev, offset: prev.offset - 1 }));
      getPokemonList(state.previous);
    } else if (direction === 'next' && state.next) {
      setState((prev) => ({ ...prev, offset: prev.offset + 1 }));
      getPokemonList(state.next);
    }
  };

  const handleSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim();
    if (trimmed === pokemon) {
      return;
    }
    setPokemon(trimmed);
    setState((prev) => ({ ...prev, offset: 0 }));
    if (pokemon === '') {
      getPokemonList('');
    }
  };
  const handleErrorTest = () => {
    setState((prev: PokemonState) => ({ ...prev, errorTest: true }));
  };

  const handleLoading = (loading: boolean) => {
    setState((prev) => ({ ...prev, loading }));
  };

  const filteredData = state.data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(state.pokemon.toLowerCase())
  );
  const handlePokemonClick = (name: string) => {
    setState((prev) => ({ ...prev, pokemonId: name }));
  };

  const setPokemonId = (pokemonId: string) => {
    setState((prev) => ({ ...prev, pokemonId }));
  };
  return (
    <div className={`app ${theme}`}>
      <h1 className="title">Pokemon finder</h1>
      <br />
      <div className="app-header-actions">
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
              loading={state.loading}
              onLoading={handleLoading}
              data={filteredData}
              error={state.error}
              errorTest={state.errorTest}
              onPokemonClick={handlePokemonClick}
            />
          </ErrorBoundary>
          <Pagination
            loading={state.loading}
            previous={state.previous}
            next={state.next}
            offset={state.offset}
            onChangePage={onChangePage}
            handleErrorTest={handleErrorTest}
          />
        </div>
        <Outlet
          context={{ pokemonId: state.pokemonId, setPokemonId: setPokemonId }}
        />
      </div>
    </div>
  );
};

export default App;
