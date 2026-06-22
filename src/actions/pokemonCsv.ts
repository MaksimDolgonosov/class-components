'use server';

import { convertToCSV } from '../utils/convertToCSV';
import { CsvDownloadState } from '../types/csvDownload';
import { PokemonDescription } from '../types/types';

export async function downloadPokemonCsv(
  _prevState: CsvDownloadState,
  formData: FormData
): Promise<CsvDownloadState> {
  const raw = formData.get('pokemons');

  if (typeof raw !== 'string' || !raw) {
    return {
      csv: null,
      filename: null,
      error: 'No pokemons selected',
    };
  }

  try {
    const pokemons = JSON.parse(raw) as PokemonDescription[];

    if (!Array.isArray(pokemons) || pokemons.length === 0) {
      return {
        csv: null,
        filename: null,
        error: 'No pokemons selected',
      };
    }

    const csv = convertToCSV(pokemons);

    return {
      csv,
      filename: `pokemons-${pokemons.length}.csv`,
      error: null,
    };
  } catch {
    return {
      csv: null,
      filename: null,
      error: 'Failed to generate CSV',
    };
  }
}
