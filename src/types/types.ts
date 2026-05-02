export interface TopControlsState {
  search: string;
}

export interface PokemonState {
  pokemon: string;
  loading: boolean;
  error: string | null;
  next: string | null;
  previous: string | null;
  data: PokemonDescription[];
  errorTest: boolean;
}

export interface TopControlsProps {
  onSearch: (pokemon: string) => void;
  placeholder: string;
}

export interface ResultsProps {
  loading: boolean;
  error: string | null;
  onLoading: (loading: boolean) => void;
  data: PokemonDescription[];
  errorTest: boolean;
}

export interface PokemonListProps {
  data: PokemonDescription[];
}

export interface PokemonListState {
  data: PokemonDescription[];
}

export interface ResultsState {
  pokemonData: string;
}

export interface PokemonResponse {
  count?: number;
  next: string | null;
  previous: string | null;
  results: PokemonResponseResults[];
  errorMessage?: string | null;
}

export interface PokemonResponseResults {
  name: string;
  url: string;
}

export interface PokemonDescription {
  name: string;
  description: string;
  imageUrl: string;
}

export interface ErrorProps {
  error: string;
  comment?: string | null;
}
