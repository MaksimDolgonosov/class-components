import { describe, expect, it, vi } from 'vitest';
import {
  enrichPokemonResults,
  fetchPokemonInfoWithBQ,
  transformPokemonInfo,
  type FetchWithBQ,
  type SpeciesResponse,
} from '../../src/api/helpers';
import { POKEAPI_BASE } from '../../src/api/apiSlice';
import type { PokemonInfoResponse } from '../../src/types/types';

const pokeJson: PokemonInfoResponse = {
  name: 'pikachu',
  sprites: { front_default: 'pikachu.png' },
  species: {
    name: 'pikachu',
    url: `${POKEAPI_BASE}pokemon-species/25/`,
  },
  height: 4,
  weight: 60,
  base_experience: 100,
};

const speciesJson: SpeciesResponse = {
  flavor_text_entries: [
    { flavor_text: 'ignored' },
    { flavor_text: 'Electric  mouse' },
  ],
  base_happiness: 70,
  capture_rate: 45,
};

const createFetchWithBQMock = (
  responses: Array<{ data?: unknown; error?: { status: number; data: string } }>
): FetchWithBQ => {
  const fetchMock = vi.fn(async () => {
    const next = responses.shift();
    if (!next) {
      throw new Error('Unexpected fetchWithBQ call');
    }
    return next;
  });

  return fetchMock as unknown as FetchWithBQ;
};

describe('transformPokemonInfo', () => {
  it('maps pokemon and species data to PokemonInfo', () => {
    expect(transformPokemonInfo(pokeJson, speciesJson)).toEqual({
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

  it('uses first flavor text entry when second is missing', () => {
    const result = transformPokemonInfo(pokeJson, {
      flavor_text_entries: [{ flavor_text: 'First  entry' }],
    });

    expect(result.description).toBe('First entry');
  });

  it('returns fallback description when flavor text is missing', () => {
    const result = transformPokemonInfo(pokeJson, {
      flavor_text_entries: [],
    });

    expect(result.description).toBe('No description found');
    expect(result.imageUrl).toBe('pikachu.png');
    expect(result.baseHappiness).toBeNull();
    expect(result.captureRate).toBeNull();
  });
});

describe('fetchPokemonInfoWithBQ', () => {
  it('fetches pokemon and species, then transforms response', async () => {
    const fetchWithBQ = createFetchWithBQMock([
      { data: pokeJson },
      { data: speciesJson },
    ]);

    const result = await fetchPokemonInfoWithBQ('pikachu', fetchWithBQ);

    expect(result).toEqual({
      name: 'pikachu',
      description: 'Electric mouse',
      imageUrl: 'pikachu.png',
      height: 4,
      weight: 60,
      baseExperience: 100,
      baseHappiness: 70,
      captureRate: 45,
    });
    expect(fetchWithBQ).toHaveBeenNthCalledWith(1, 'pokemon/pikachu');
    expect(fetchWithBQ).toHaveBeenNthCalledWith(2, 'pokemon-species/25/');
  });

  it('throws when pokemon id is empty', async () => {
    const fetchWithBQ = createFetchWithBQMock([]);

    await expect(fetchPokemonInfoWithBQ('', fetchWithBQ)).rejects.toThrow(
      'Pokemon id is required'
    );
    expect(fetchWithBQ).not.toHaveBeenCalled();
  });

  it('throws when pokemon request fails', async () => {
    const fetchError = { status: 404, data: 'Not found' };
    const fetchWithBQ = createFetchWithBQMock([{ error: fetchError }]);

    await expect(fetchPokemonInfoWithBQ('unknown', fetchWithBQ)).rejects.toEqual(
      fetchError
    );
  });

  it('throws when species request fails', async () => {
    const fetchError = { status: 500, data: 'Species error' };
    const fetchWithBQ = createFetchWithBQMock([
      { data: pokeJson },
      { error: fetchError },
    ]);

    await expect(fetchPokemonInfoWithBQ('pikachu', fetchWithBQ)).rejects.toEqual(
      fetchError
    );
  });
});

describe('enrichPokemonResults', () => {
  it('enriches pokemon list with description and image', async () => {
    const fetchWithBQ = createFetchWithBQMock([
      { data: pokeJson },
      { data: speciesJson },
    ]);

    const result = await enrichPokemonResults(
      [{ name: 'pikachu', url: `${POKEAPI_BASE}pokemon/25/` }],
      fetchWithBQ
    );

    expect(result).toEqual([
      {
        name: 'pikachu',
        description: 'Electric mouse',
        imageUrl: 'pikachu.png',
      },
    ]);
    expect(fetchWithBQ).toHaveBeenNthCalledWith(1, 'pokemon/25/');
    expect(fetchWithBQ).toHaveBeenNthCalledWith(2, 'pokemon-species/25/');
  });

  it('accepts relative pokemon url without base prefix', async () => {
    const fetchWithBQ = createFetchWithBQMock([
      { data: pokeJson },
      { data: speciesJson },
    ]);

    await enrichPokemonResults(
      [{ name: 'pikachu', url: 'pokemon/25/' }],
      fetchWithBQ
    );

    expect(fetchWithBQ).toHaveBeenNthCalledWith(1, 'pokemon/25/');
  });

  it('throws when pokemon request fails', async () => {
    const fetchError = { status: 404, data: 'Not found' };
    const fetchWithBQ = createFetchWithBQMock([{ error: fetchError }]);

    await expect(
      enrichPokemonResults(
        [{ name: 'pikachu', url: `${POKEAPI_BASE}pokemon/25/` }],
        fetchWithBQ
      )
    ).rejects.toEqual(fetchError);
  });

  it('throws when species request fails', async () => {
    const fetchError = { status: 500, data: 'Species error' };
    const fetchWithBQ = createFetchWithBQMock([
      { data: pokeJson },
      { error: fetchError },
    ]);

    await expect(
      enrichPokemonResults(
        [{ name: 'pikachu', url: `${POKEAPI_BASE}pokemon/25/` }],
        fetchWithBQ
      )
    ).rejects.toEqual(fetchError);
  });
});
