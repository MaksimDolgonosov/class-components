import { PokemonInfo, PokemonInfoResponse } from '../types/types';

export default async function getPokemonInfo(
  pokemonId: string | null
): Promise<PokemonInfo> {
  if (!pokemonId) {
    throw new Error('Pokemon id is required');
  }

  const pokeRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  if (!pokeRes.ok) {
    throw new Error(`Request failed with status: ${pokeRes.status}`);
  }

  const pokeJson: PokemonInfoResponse = await pokeRes.json();

  const descriptionRes = await fetch(pokeJson.species.url);
  if (!descriptionRes.ok) {
    throw new Error(`Request failed with status: ${descriptionRes.status}`);
  }

  const descriptionJson = await descriptionRes.json();
  const imageUrl = pokeJson.sprites.front_default ?? '';
  const entry =
    descriptionJson.flavor_text_entries?.[1] ??
    descriptionJson.flavor_text_entries?.[0];
  const description =
    entry?.flavor_text?.replace(/\s+/g, ' ') ?? 'No description found';

  return {
    name: pokeJson.name,
    description,
    imageUrl,
    height: pokeJson.height,
    weight: pokeJson.weight,
    baseExperience: pokeJson.base_experience,
    baseHappiness: descriptionJson.base_happiness ?? null,
    captureRate: descriptionJson.capture_rate ?? null,
  };
}
