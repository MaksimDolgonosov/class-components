import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDescription } from '../types/types';

interface ISelectedPokemons {
  pokemons: PokemonDescription[];
}

const initialState: ISelectedPokemons = {
  pokemons: [],
};

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<PokemonDescription[]>) => {
      state.pokemons = action.payload;
    },
    addPokemon: (state, action: PayloadAction<PokemonDescription>) => {
      state.pokemons.push(action.payload);
    },
    removePokemon: (state, action: PayloadAction<string>) => {
      state.pokemons = state.pokemons.filter(
        (pokemon) => pokemon.name !== action.payload
      );
    },
  },
});

export const { setPokemons, addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
