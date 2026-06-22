'use client';

import Image from 'next/image';
import { Link } from '../../i18n/navigation';
import { buildFinderUrl } from '../../lib/finderUrl';
import { PokemonDescription } from '../../types/types';
import './pokemon-item.scss';
import { addPokemon, removePokemon } from '../../store/pokemonSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';

type PokemonItemProps = PokemonDescription & {
  page: number;
  search: string;
};

const PokemonItem = ({
  name,
  description,
  imageUrl,
  page,
  search,
}: PokemonItemProps) => {
  const dispatch = useDispatch();
  const { pokemons } = useAppSelector((state) => state.pokemons);

  const togglePokemon = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.target.checked) {
      dispatch(addPokemon({ name, description, imageUrl }));
    } else {
      dispatch(removePokemon(name));
    }
  };

  return (
    <Link
      href={buildFinderUrl({ page, search, pokemon: name })}
      className="pokemon-item"
    >
      <input
        className="pokemon-item-checkbox"
        checked={pokemons.some((pokemon) => pokemon.name === name)}
        type="checkbox"
        value={name}
        onChange={togglePokemon}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="pokemon-item-image">
        {imageUrl ? (
          <Image src={imageUrl} alt={name} width={50} height={50} />
        ) : null}
      </div>
      <div className="pokemon-item-descr">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default PokemonItem;
