import { Component } from 'react';
import { PokemonListProps } from '../../types/types';
import './pokemon-list.scss';
import PokemonItem from '../PokemonItem/PokemonItem';
import { PokemonDescription } from '../../types/types';

class PokemonList extends Component<PokemonListProps> {
  render() {
    return (
      <div className="pokemon-list">
        {this.props.data.length > 0 ? (
          this.props.data.map((pokemon: PokemonDescription) => (
            <PokemonItem key={pokemon.name} {...pokemon} />
          ))
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    );
  }
}

export default PokemonList;
