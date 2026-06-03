import fetchPokemonInfo from '../../src/services/fetchPokemonInfo';
import { afterEach, describe, expect, it } from 'vitest';
import { mockFetchSequence, restoreFetchMock } from '../test-utils';

describe('fetchPokemonInfo', () => {
  afterEach(() => {
    restoreFetchMock();
  });

  it('should fetch pokemon info', async () => {
    mockFetchSequence([
      {
        data: {
          name: 'pikachu',
          sprites: { front_default: 'pikachu.png' },
          species: { url: 'https://pokeapi.co/api/v2/pokemon-species/25/' },
          height: 4,
          weight: 60,
          base_experience: 100,
        },
      },
      {
        data: {
          flavor_text_entries: [
            { flavor_text: 'ignored' },
            { flavor_text: 'Electric  mouse' },
          ],
          base_happiness: 70,
          capture_rate: 45,
        },
      },
    ]);

    const pokemonInfo = await fetchPokemonInfo('pikachu');

    expect(pokemonInfo).toEqual({
      name: 'pikachu',
      description: 'Electric mouse',
      imageUrl: 'pikachu.png',
      height: 4,
      weight: 60,
      baseExperience: 100,
      baseHappiness: 70,
      captureRate: 45,
    });
  });
});
