import { afterEach, describe, expect, it } from 'vitest';
import getPokemonListWithDescription from '../../src/services/fetchPokemons';
import { mockFetchSequence, restoreFetchMock } from '../test-utils';

describe('getPokemonListWithDescription', () => {
  afterEach(() => {
    restoreFetchMock();
  });

  it('returns pokemon with description and image', async () => {
    mockFetchSequence([
      {
        data: {
          next: null,
          previous: null,
          results: [
            { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
          ],
        },
      },
      {
        data: {
          species: { url: 'https://pokeapi.co/api/v2/pokemon-species/25/' },
          sprites: { front_default: 'pikachu.png' },
        },
      },
      {
        data: {
          flavor_text_entries: [
            { flavor_text: 'ignored' },
            { flavor_text: 'Electric  mouse' },
          ],
        },
      },
    ]);

    const result = await getPokemonListWithDescription(
      'https://custom-url.test'
    );

    expect(result.errorMessage).toBeNull();
    expect(result.results).toEqual([
      {
        name: 'pikachu',
        description: 'Electric mouse',
        imageUrl: 'pikachu.png',
      },
    ]);
  });
});
