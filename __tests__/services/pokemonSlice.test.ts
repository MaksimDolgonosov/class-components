import { describe, expect, it } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer, {
  setPokemons,
  addPokemon,
  removePokemon,
} from '../../src/store/pokemonSlice';
import { PokemonDescription } from '../../src/types/types';

const pikachu: PokemonDescription = {
  name: 'pikachu',
  description: 'Electric mouse',
  imageUrl: 'pikachu.png',
};

const bulbasaur: PokemonDescription = {
  name: 'bulbasaur',
  description: 'Seed pokemon',
  imageUrl: 'bulbasaur.png',
};

const createTestStore = () =>
  configureStore({
    reducer: { pokemons: pokemonReducer },
  });

describe('pokemonSlice', () => {
  it('returns initial state', () => {
    expect(pokemonReducer(undefined, { type: 'unknown' })).toEqual({
      pokemons: [],
    });
  });

  it('setPokemons replaces the list', () => {
    const store = createTestStore();

    store.dispatch(setPokemons([pikachu, bulbasaur]));

    expect(store.getState().pokemons).toEqual({
      pokemons: [pikachu, bulbasaur],
    });
  });

  it('setPokemons clears the list when payload is empty', () => {
    const store = createTestStore();
    store.dispatch(setPokemons([pikachu]));
    store.dispatch(setPokemons([]));

    expect(store.getState().pokemons.pokemons).toEqual([]);
  });

  it('addPokemon appends a pokemon', () => {
    const store = createTestStore();

    store.dispatch(addPokemon(pikachu));
    store.dispatch(addPokemon(bulbasaur));

    expect(store.getState().pokemons.pokemons).toEqual([pikachu, bulbasaur]);
  });

  it('removePokemon removes pokemon by name', () => {
    const store = createTestStore();
    store.dispatch(setPokemons([pikachu, bulbasaur]));

    store.dispatch(removePokemon('pikachu'));

    expect(store.getState().pokemons.pokemons).toEqual([bulbasaur]);
  });

  it('removePokemon does not change list if name is not found', () => {
    const store = createTestStore();
    store.dispatch(setPokemons([pikachu]));

    store.dispatch(removePokemon('unknown'));

    expect(store.getState().pokemons.pokemons).toEqual([pikachu]);
  });
});
