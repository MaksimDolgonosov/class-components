import { useState, useEffect, useCallback } from 'react';
import TopControls from '../TopControls/TopControls';
import Results from '../Results/Results';
import { PokemonState } from '../../types/types';
import getPokemonListWithDescription from '../../services/fetchPokemons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import useLocalStorage from '../../hooks/useLocalStorage';
import './app.scss';

const App = () => {
  const { pokemon, setPokemon } = useLocalStorage('pokemon', '');
  const [state, setState] = useState<PokemonState>({
    pokemon: pokemon,
    loading: true,
    error: null,
    next: null,
    previous: null,
    data: [],
    errorTest: false,
  });

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

    if (direction === 'previous' && state.previous)
      getPokemonList(state.previous);
    else if (direction === 'next' && state.next) getPokemonList(state.next);
  };

  const handleSearch = (searchTerm: string) => {
    const trimmed = searchTerm.trim();
    if (trimmed === pokemon) {
      return;
    }
    setPokemon(trimmed);
  };

  const handleLoading = (loading: boolean) => {
    setState((prev) => ({ ...prev, loading }));
  };

  const filteredData = state.data.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(state.pokemon.toLowerCase())
  );
  return (
    <div className="app">
      <h1 className="title">Pokemon finder</h1>
      <div className="container">
        <TopControls onSearch={handleSearch} placeholder={state.pokemon} />
        <ErrorBoundary>
          <Results
            loading={state.loading}
            onLoading={handleLoading}
            data={filteredData}
            error={state.error}
            errorTest={state.errorTest}
          />
        </ErrorBoundary>

        <div className="container-btns">
          <div className="container-btns-nav">
            <button
              disabled={state.previous === null}
              onClick={() => onChangePage('previous')}
            >
              Previous page
            </button>
            <button
              disabled={state.next === null}
              onClick={() => onChangePage('next')}
            >
              Next page
            </button>
          </div>
          <button
            className="error-test-btn"
            onClick={() => setState((prev) => ({ ...prev, errorTest: true }))}
          >
            Error test
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
