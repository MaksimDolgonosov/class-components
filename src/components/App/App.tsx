import { Component } from 'react';
import TopControls from '../TopControls/TopControls';
import Results from '../Results/Results';
import { PokemonState } from '../../types/types';
import getPokemonListWithDescription from '../../services/fetchPokemons';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

import './app.scss';
class App extends Component {
  state: PokemonState = {
    pokemon: '',
    loading: true,
    error: null,
    next: '',
    previous: '',
    data: [],
    errorTest: false,
  };

  componentDidMount() {
    this.setState({ pokemon: localStorage.getItem('pokemon') || '' });
    this.getPokemonList('');
  }

  getPokemonList = (url: string) => {
    this.setState({ loading: true });

    getPokemonListWithDescription(url)
      .then((data) => {
        this.setState({
          data: data.results,
          next: data.next,
          previous: data.previous,
          loading: false,
          error: data.errorMessage,
        });
      })
      .catch((error) => {
        this.setState({
          data: [],
          loading: false,
          error: `Server error: ${error.message}`,
        });
      });
  };

  onChangePage = (direction: 'previous' | 'next') => {
    if (this.state.previous === null && direction === 'previous') {
      return;
    }

    if (direction === 'previous' && this.state.previous) {
      this.getPokemonList(this.state.previous);
    } else if (direction === 'next' && this.state.next) {
      this.getPokemonList(this.state.next);
    }
  };

  handleSearch = (pokemon: string) => {
    if (pokemon.trim() === this.state.pokemon) {
      return;
    }
    localStorage.setItem('pokemon', pokemon.trim());
    this.setState({ pokemon: pokemon.trim() });
  };

  handleLoading = (loading: boolean) => {
    this.setState({ loading });
  };

  render() {
    const filteredData = this.state.data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(this.state.pokemon.toLowerCase())
    );
    return (
      <div className="app">
        <h1 className="title">Pokemon finder</h1>
        <div className="container">
          <TopControls
            onSearch={this.handleSearch}
            placeholder={this.state.pokemon}
          />
          <ErrorBoundary>
            <Results
              loading={this.state.loading}
              onLoading={this.handleLoading}
              data={filteredData}
              error={this.state.error}
              errorTest={this.state.errorTest}
            />
          </ErrorBoundary>

          <div className="container-btns">
            <div className="container-btns-nav">
              <button
                disabled={this.state.previous === null}
                onClick={() => this.onChangePage('previous')}
              >
                Previous page
              </button>
              <button
                disabled={this.state.next === null}
                onClick={() => this.onChangePage('next')}
              >
                Next page
              </button>
            </div>
            <button
              className="error-test-btn"
              onClick={() => this.setState({ errorTest: true })}
            >
              Error test
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
