import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import {
  PokemonInfoResponse,
  PokemonResponse,
  PokemonListWithDetails,
  GetPokemonsQueryArg,
} from '../types/types';
import { enrichPokemonResults, FetchWithBQ } from './helpers';

export const POKEAPI_BASE = 'https://pokeapi.co/api/v2/';

export const apiSlice = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: POKEAPI_BASE }),
  endpoints: (builder) => ({
    getPokemonsList: builder.query<PokemonListWithDetails, GetPokemonsQueryArg>(
      {
        async queryFn(arg, _api, _extraOptions, fetchWithBQ) {
          const { limit = 10, offset = 0 } = arg ?? {};
          const listRes = await fetchWithBQ(
            `pokemon?limit=${limit}&offset=${offset}`
          );

          if (listRes.error) {
            return { error: listRes.error };
          }

          const listJson = listRes.data as PokemonResponse;

          try {
            const results = await enrichPokemonResults(
              listJson.results,
              fetchWithBQ as FetchWithBQ
            );
            return {
              data: {
                count: listJson.count,
                next: listJson.next,
                previous: listJson.previous,
                results,
              },
            };
          } catch (error) {
            return { error: error as FetchBaseQueryError };
          }
        },
        keepUnusedDataFor: parseInt(import.meta.env.VITE_CACHE_TTL) || 60,
      }
    ),
    getPokemonByName: builder.query<PokemonInfoResponse, string>({
      query: (name) => `pokemon/${name}`,
      keepUnusedDataFor: parseInt(import.meta.env.VITE_CACHE_TTL) || 60,
    }),
  }),
});

export const {
  useGetPokemonsListQuery,
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
} = apiSlice;
