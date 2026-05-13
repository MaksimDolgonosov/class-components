import { useState, useEffect } from 'react';
import TopControls from '../TopControls/TopControls';
import Results from '../Results/Results';
import { PokemonState } from '../../types/types';
import getPokemonListWithDescription from '../../services/fetchPokemons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './app.scss';
const App = () => {
  const [state, setState] = useState<PokemonState>({
    pokemon: '',
    loading: true,
    error: null,
    next: null,
    previous: null,
    data: [],
    errorTest: false,
  });

  useEffect(() => {
    setState({ ...state, pokemon: localStorage.getItem('pokemon') || '' });
    getPokemonList('');
  }, []);

  const getPokemonList = (url: string) => {
    setState({ ...state, loading: true });

    getPokemonListWithDescription(url)
      .then((data) => {
        setState({
          ...state,
          data: data.results,
          next: data.next,
          previous: data.previous,
          loading: false,
          error: data.errorMessage,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          data: [],
          loading: false,
          error: `Server error: ${error.message}`,
        });
      });
  };
  const onChangePage = (direction: 'previous' | 'next') => {
    if (state.previous === null && direction === 'previous') {
      return;
    }

    if (direction === 'previous' && state.previous)
      getPokemonList(state.previous);
    else if (direction === 'next' && state.next) getPokemonList(state.next);
  };

  const handleSearch = (pokemon: string) => {
    if (pokemon.trim() === state.pokemon) {
      return;
    }
    localStorage.setItem('pokemon', pokemon.trim());
    setState({ ...state, pokemon: pokemon.trim() });
  };

  const handleLoading = (loading: boolean) => {
    setState({ ...state, loading });
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
            onClick={() => setState({ ...state, errorTest: true })}
          >
            Error test
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
