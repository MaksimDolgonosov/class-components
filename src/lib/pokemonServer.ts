import { PokemonDescription, PokemonListWithDetails } from '../types/types';

const POKEAPI_BASE = 'https://pokeapi.co/api/v2/';

export async function fetchPokemonListPage(
  limit: number,
  offset: number,
  forceError = false
): Promise<PokemonListWithDetails> {
  if (forceError) {
    throw new Error('Forced server error for testing');
  }

  const listRes = await fetch(
    `${POKEAPI_BASE}pokemon?limit=${limit}&offset=${offset}`,
    { next: { revalidate: 60 } }
  );

  if (!listRes.ok) {
    throw new Error(`Request failed with status: ${listRes.status}`);
  }

  const listJson = await listRes.json();

  const results: PokemonDescription[] = await Promise.all(
    listJson.results.map(async (p: { name: string; url: string }) => {
      const pokeRes = await fetch(p.url, { next: { revalidate: 60 } });
      const pokeJson = await pokeRes.json();
      const speciesRes = await fetch(pokeJson.species.url, {
        next: { revalidate: 60 },
      });
      const speciesJson = await speciesRes.json();
      const entry =
        speciesJson.flavor_text_entries?.[1] ??
        speciesJson.flavor_text_entries?.[0];
      const description =
        entry?.flavor_text?.replace(/\s+/g, ' ') ?? 'No description found';

      return {
        name: p.name,
        description,
        imageUrl: pokeJson.sprites.front_default ?? '',
      };
    })
  );

  return {
    results,
    next: listJson.next,
    previous: listJson.previous,
  };
}
