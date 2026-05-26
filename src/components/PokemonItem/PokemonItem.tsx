import { PokemonItemProps } from '../../types/types';
import './pokemon-item.scss';
import { addPokemon, removePokemon } from '../../store/pokemonSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';

const PokemonItem = ({
  name,
  description,
  imageUrl,
  onPokemonClick,
}: PokemonItemProps) => {
  const dispatch = useDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemons);
  const togglePokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.target.checked) {
      dispatch(addPokemon({ name, description, imageUrl }));
    } else {
      dispatch(removePokemon(name));
    }
  };

  return (
    <div className="pokemon-item" onClick={() => onPokemonClick(name)}>
      <input
        className="pokemon-item-checkbox"
        checked={pokemons.some((pokemon) => pokemon.name === name)}
        type="checkbox"
        value={name}
        onChange={togglePokemon}
        onClick={(e) => e.stopPropagation()}
      />
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
