import { PokemonListProps } from '../../types/types';
import './pokemon-list.scss';
import PokemonItem from '../PokemonItem/PokemonItem';
import { PokemonDescription } from '../../types/types';

const PokemonList = ({ data, onPokemonClick }: PokemonListProps) => {
  return (
    <div className="pokemon-list">
      {data.length > 0 ? (
        data.map((pokemon: PokemonDescription) => (
          <PokemonItem
            key={pokemon.name}
            {...pokemon}
            onPokemonClick={onPokemonClick}
          />
        ))
      ) : (
        <p className="no-results">No results found</p>
      )}
    </div>
  );
};

export default PokemonList;
