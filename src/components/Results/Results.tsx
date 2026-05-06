import { Component } from 'react';
import './results.scss';
import Spinner from '../Spinner/Spinner';
import { ResultsProps, ResultsState } from '../../types/types';
import PokemonList from '../PokemonList/PokemonList';
import Error from '../Error/Error';

class Results extends Component<ResultsProps> {
  state: ResultsState = {
    pokemonData: '',
  };

  componentDidUpdate(prevProps: ResultsProps) {
    if (this.props.errorTest) {
      if (prevProps.errorTest !== this.props.errorTest) {
        throw new Error({ error: `Test error: ${this.props.errorTest}` });
      }
    }
  }

  render() {
    return (
      <div className="results">
        {this.props.error ? <Error error={this.props.error} /> : null}
        {this.props.loading ? (
          <Spinner />
        ) : this.props.error ? null : (
          <PokemonList data={this.props.data} />
        )}
      </div>
    );
  }
}

export default Results;
