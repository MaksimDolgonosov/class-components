export interface TopControlsState {
  search: string;
}

export interface PokemonState {
  pokemon: string;
  errorTest: boolean;
  limit: number;
}

export interface TopControlsProps {
  onSearch: (pokemon: string) => void;
  placeholder: string;
}

export interface ResultsProps {
  loading: boolean;
  error: string | null | undefined;
  // onLoading: (loading: boolean) => void;
  data: PokemonDescription[];
  errorTest: boolean;
  onPokemonClick: (name: string) => void;
  onRetry?: () => void;
}

export interface PokemonListProps {
  data: PokemonDescription[];
  page: number;
  search: string;
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

export interface PokemonListWithDetails {
  count?: number;
  next: string | null;
  previous: string | null;
  results: PokemonDescription[];
}

export interface PokemonItemProps extends PokemonDescription {
  page: number;
  search: string;
}

export interface ErrorProps {
  error: string;
  comment?: string | null;
  onRetry?: () => void;
}

export interface PaginationProps {
  loading: boolean;
  previous: string | null;
  next: string | null;
  offset: number;
  onChangePage: (direction: 'previous' | 'next') => void;
  handleErrorTest: () => void;
}

export interface PokemonInfoProps {
  pokemonId: string | null;
  onClose: () => void;
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

export type IThemeContext = {
  theme: TTheme;
  toggleTheme: () => void;
};

export type GetPokemonsQueryArg = {
  limit?: number;
  offset?: number;
  link?: string | null;
  forceError?: boolean;
};
export type TTheme = 'light' | 'dark';
