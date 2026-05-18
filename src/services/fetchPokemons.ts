import {
  PokemonResponse,
  PokemonDescription,
  PokemonResponseResults,
} from '../types/types';

export default async function getPokemonListWithDescription(
  url: string | null,
  limit: number = 10,
  offset: number = 0
) {
  const errorMessage: string | null = null;
  const listRes = await fetch(
    url || `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  if (!listRes.ok) {
    throw new Error(`Request failed with status: ${listRes.status}`);
  }

  const listJson: PokemonResponse = await listRes.json();
  const next = listJson.next;
  const previous = listJson.previous;

  const results: PokemonDescription[] = await Promise.all(
    listJson.results.map(async (p: PokemonResponseResults) => {
      const pokeRes = await fetch(p.url);
      const pokeJson = await pokeRes.json();
      const speciesRes = await fetch(pokeJson.species.url);
      const imageUrl = await pokeJson.sprites.front_default;
      const speciesJson = await speciesRes.json();
      const entry =
        speciesJson.flavor_text_entries[1] || 'No description found';
      const description = entry.flavor_text.replace(/\s+/g, ' ');
      return { name: p.name, description, imageUrl };
    })
  );
  return { results, next, previous, errorMessage };
}
