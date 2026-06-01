import { configureStore } from '@reduxjs/toolkit';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { restoreFetchMock } from '../test-utils';

const mocks = vi.hoisted(() => ({
  enrichPokemonResults: vi.fn(),
  fetchPokemonInfoWithBQ: vi.fn(),
}));

vi.mock('../../src/api/helpers', () => ({
  enrichPokemonResults: mocks.enrichPokemonResults,
  fetchPokemonInfoWithBQ: mocks.fetchPokemonInfoWithBQ,
}));

import { apiSlice } from '../../src/api/apiSlice';

const mockRtkFetchSequence = (
  responses: Array<{ ok?: boolean; status?: number; data?: unknown }>
) => {
  const fetchMock = vi.fn();

  responses.forEach(({ ok = true, status = 200, data }) => {
    const response = {
      ok,
      status,
      json: async () => data,
      text: async () => JSON.stringify(data),
      clone() {
        return response;
      },
    };

    fetchMock.mockResolvedValueOnce(response);
  });

  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
};

const enrichedPikachu = {
  name: 'pikachu',
  description: 'Electric mouse',
  imageUrl: 'pikachu.png',
};

const pokemonInfo = {
  name: 'pikachu',
  description: 'Electric mouse',
  imageUrl: 'pikachu.png',
  height: 4,
  weight: 60,
  baseExperience: 100,
  baseHappiness: 70,
  captureRate: 45,
};

const createTestStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });

describe('apiSlice', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    restoreFetchMock();
  });

  describe('getPokemonsList', () => {
    it('returns forced error when forceError is true', async () => {
      const store = createTestStore();

      const result = await store.dispatch(
        apiSlice.endpoints.getPokemonsList.initiate({ forceError: true })
      );

      expect(result.error).toEqual({
        status: 500,
        data: 'Forced RTK error for testing',
      });
      expect(mocks.enrichPokemonResults).not.toHaveBeenCalled();
    });

    it('returns enriched pokemon list on success', async () => {
      mockRtkFetchSequence([
        {
          data: {
            count: 1,
            next: null,
            previous: null,
            results: [
              {
                name: 'pikachu',
                url: 'https://pokeapi.co/api/v2/pokemon/25/',
              },
            ],
          },
        },
      ]);
      mocks.enrichPokemonResults.mockResolvedValue([enrichedPikachu]);

      const store = createTestStore();
      const result = await store.dispatch(
        apiSlice.endpoints.getPokemonsList.initiate({ limit: 10, offset: 0 })
      );

      expect(result.data).toEqual({
        count: 1,
        next: null,
        previous: null,
        results: [enrichedPikachu],
      });
      expect(mocks.enrichPokemonResults).toHaveBeenCalledWith(
        [
          {
            name: 'pikachu',
            url: 'https://pokeapi.co/api/v2/pokemon/25/',
          },
        ],
        expect.any(Function)
      );
    });

    it('returns error when pokemon list request fails', async () => {
      mockRtkFetchSequence([{ ok: false, status: 404, data: 'Not found' }]);

      const store = createTestStore();
      const result = await store.dispatch(
        apiSlice.endpoints.getPokemonsList.initiate({ limit: 10, offset: 0 })
      );

      expect(result.error).toEqual({
        status: 404,
        data: 'Not found',
      });
      expect(mocks.enrichPokemonResults).not.toHaveBeenCalled();
    });

    it('returns error when enrichPokemonResults throws', async () => {
      mockRtkFetchSequence([
        {
          data: {
            count: 1,
            next: null,
            previous: null,
            results: [
              {
                name: 'pikachu',
                url: 'https://pokeapi.co/api/v2/pokemon/25/',
              },
            ],
          },
        },
      ]);
      const enrichError = { status: 500, data: 'Enrich failed' };
      mocks.enrichPokemonResults.mockRejectedValue(enrichError);

      const store = createTestStore();
      const result = await store.dispatch(
        apiSlice.endpoints.getPokemonsList.initiate({ limit: 10, offset: 0 })
      );

      expect(result.error).toEqual(enrichError);
    });
  });

  describe('getPokemonByName', () => {
    it('returns error when name is empty', async () => {
      const store = createTestStore();

      const result = await store.dispatch(
        apiSlice.endpoints.getPokemonByName.initiate('')
      );

      expect(result.error).toEqual({
        status: 400,
        data: 'Pokemon id is required',
      });
      expect(mocks.fetchPokemonInfoWithBQ).not.toHaveBeenCalled();
    });

    it('returns pokemon info on success', async () => {
      mocks.fetchPokemonInfoWithBQ.mockResolvedValue(pokemonInfo);

      const store = createTestStore();
      const result = await store.dispatch(
        apiSlice.endpoints.getPokemonByName.initiate('pikachu')
      );

      expect(result.data).toEqual(pokemonInfo);
      expect(mocks.fetchPokemonInfoWithBQ).toHaveBeenCalledWith(
        'pikachu',
        expect.any(Function)
      );
    });

    it('returns error when fetchPokemonInfoWithBQ throws', async () => {
      const fetchError = { status: 404, data: 'Not found' };
      mocks.fetchPokemonInfoWithBQ.mockRejectedValue(fetchError);

      const store = createTestStore();
      const result = await store.dispatch(
        apiSlice.endpoints.getPokemonByName.initiate('unknown')
      );

      expect(result.error).toEqual(fetchError);
    });
  });
});
