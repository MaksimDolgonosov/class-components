import { PokemonDescription } from '../types/types';
export const convertToCSV = (data: PokemonDescription[]) => {
  const headers = ['name', 'description', 'imageUrl'];
  const csv = data.map((item) =>
    headers.map((header) => item[header as keyof PokemonDescription]).join(',')
  );
  return headers.join(',') + '\n' + csv.join('\n');
};
