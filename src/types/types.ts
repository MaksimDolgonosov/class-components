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
  limit: number;
  offset: number;
  pokemonId: string | null;
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
  onPokemonClick: (name: string) => void;
}

export interface PokemonListProps {
  data: PokemonDescription[];
  onPokemonClick: (name: string) => void;
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

export interface PokemonItemProps extends PokemonDescription {
  onPokemonClick: (name: string) => void;
}

export interface ErrorProps {
  error: string;
  comment?: string | null;
}

export interface PaginationProps {
  loading: boolean;
  previous: string | null;
  next: string | null;
  offset: number;
  onChangePage: (direction: 'previous' | 'next') => void;
  handleErrorTest: () => void;
}

export interface OutletContext {
  pokemonId: string | null;
  setPokemonId: (pokemonId: string | null) => void;
}

export interface PokemonInfoResponse {
  name: string;
  sprites: {
    front_default: string;
  };
  species: PokemonResponseResults;
  height: number;
  weight: number;
  base_experience: number;
}

export interface PokemonInfo {
  name: string;
  description: string;
  imageUrl: string;
  baseHappiness: number | null;
  captureRate: number | null;
  height: number;
  weight: number;
  baseExperience: number;
}

export interface PokemonInfoState extends PokemonInfo {
  loading: boolean;
  error: string | null;
}
