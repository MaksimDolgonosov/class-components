import { PokemonResponseResults } from '../types/types';
import { PokemonDescription, PokemonInfoResponse } from '../types/types';
import { POKEAPI_BASE } from './apiSlice';
import { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

export type SpeciesResponse = {
  flavor_text_entries: { flavor_text: string }[];
};
export type FetchWithBQ = (
  arg: string | FetchArgs
) => Promise<{ data?: unknown; error?: FetchBaseQueryError }>;

const toApiPath = (url: string) =>
  url.startsWith(POKEAPI_BASE) ? url.slice(POKEAPI_BASE.length) : url;

export async function enrichPokemonResults(
  items: PokemonResponseResults[],
  fetchWithBQ: FetchWithBQ
): Promise<PokemonDescription[]> {
  return Promise.all(
    items.map(async (p) => {
      const pokeRes = await fetchWithBQ(toApiPath(p.url));
      if (pokeRes.error) {
        throw pokeRes.error;
      }

      const pokeJson = pokeRes.data as PokemonInfoResponse;
      const speciesRes = await fetchWithBQ(toApiPath(pokeJson.species.url));
      if (speciesRes.error) {
        throw speciesRes.error;
      }

      const speciesJson = speciesRes.data as SpeciesResponse;
      const entry =
        speciesJson.flavor_text_entries[1] ?? 'No description found';
      const description =
        typeof entry === 'string'
          ? entry
          : entry.flavor_text.replace(/\s+/g, ' ');

      return {
        name: p.name,
        description,
        imageUrl: pokeJson.sprites.front_default ?? '',
      };
    })
  );
}
