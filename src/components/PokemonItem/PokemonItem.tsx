import { PokemonDescription } from '../../types/types';
import './pokemon-item.scss';

const PokemonItem = ({ name, description, imageUrl }: PokemonDescription) => {
  return (
    <div className="pokemon-item">
      <div
        className="pokemon-item-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="pokemon-item-descr">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PokemonItem;
