import { describe, expect, it } from 'vitest';
import { convertToCSV } from '../../src/utils/convertToCSV';
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

describe('convertToCSV', () => {
  it('returns header row only for empty array', () => {
    expect(convertToCSV([])).toBe('name,description,imageUrl\n');
  });

  it('converts a single pokemon to CSV', () => {
    expect(convertToCSV([pikachu])).toBe(
      'name,description,imageUrl\npikachu,Electric mouse,pikachu.png'
    );
  });

  it('converts multiple pokemons to CSV', () => {
    expect(convertToCSV([pikachu, bulbasaur])).toBe(
      'name,description,imageUrl\npikachu,Electric mouse,pikachu.png\nbulbasaur,Seed pokemon,bulbasaur.png'
    );
  });
});
