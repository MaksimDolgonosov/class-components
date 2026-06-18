import PokemonInfo from '../../src/components/PokemonInfo/PokemonInfo';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useGetPokemonByNameQuery } from '../../src/api/apiSlice';
import { store } from '../../src/store';

vi.mock('../../src/api/apiSlice', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('../../src/api/apiSlice')>();
  return {
    ...actual,
    useGetPokemonByNameQuery: vi.fn(),
  };
});

const mockPokemonInfo = {
  name: 'pikachu',
  description: 'Electric mouse',
  imageUrl: 'pikachu.png',
  height: 4,
  weight: 60,
  baseExperience: 100,
  baseHappiness: 70,
  captureRate: 45,
};

const renderPokemonInfo = (
  props: {
    pokemonId?: string | null;
    onClose?: ReturnType<typeof vi.fn>;
  } = {}
) => {
  const onClose = props.onClose ?? vi.fn();

  render(
    <Provider store={store}>
      <PokemonInfo pokemonId={props.pokemonId ?? 'pikachu'} onClose={onClose} />
    </Provider>
  );

  return { onClose };
};

const mockQueryResult = (
  overrides: Partial<ReturnType<typeof useGetPokemonByNameQuery>> = {}
) => {
  vi.mocked(useGetPokemonByNameQuery).mockReturnValue({
    data: mockPokemonInfo,
    isLoading: false,
    isFetching: false,
    isError: false,
    error: undefined,
    refetch: vi.fn(),
    ...overrides,
  } as ReturnType<typeof useGetPokemonByNameQuery>);
};

describe('PokemonInfo', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockQueryResult();
  });

  it('renders pokemon details', async () => {
    renderPokemonInfo();

    await waitFor(() => {
      expect(screen.getByText('PIKACHU')).toBeDefined();
      expect(screen.getByText('Electric mouse')).toBeDefined();
      expect(screen.getByText('70')).toBeDefined();
      expect(screen.getByText('45')).toBeDefined();
    });
    expect(screen.getByRole('button', { name: 'Close' })).toBeDefined();
    expect(screen.getByRole('img', { name: 'pikachu' })).toHaveAttribute(
      'src',
      'pikachu.png'
    );
  });

  it('shows spinner while fetching', () => {
    mockQueryResult({
      data: undefined,
      isFetching: true,
    });

    renderPokemonInfo();

    expect(screen.getByAltText('spinner')).toBeDefined();
    expect(screen.queryByText('PIKACHU')).toBeNull();
  });

  it('shows error message with HTTP status', () => {
    mockQueryResult({
      data: undefined,
      isError: true,
      error: { status: 404, data: 'Not found' },
    });

    renderPokemonInfo();

    expect(screen.getByText('Request failed with status: 404')).toBeDefined();
    expect(screen.queryByText('PIKACHU')).toBeNull();
  });

  it('shows generic error when error has no status', () => {
    mockQueryResult({
      data: undefined,
      isError: true,
      error: { message: 'Network error' },
    });

    renderPokemonInfo();

    expect(screen.getByText('Failed to load pokemon')).toBeDefined();
  });

  it('renders empty content when data is missing', () => {
    mockQueryResult({
      data: undefined,
    });

    renderPokemonInfo();

    expect(screen.queryByText('PIKACHU')).toBeNull();
    expect(screen.queryByAltText('spinner')).toBeNull();
    expect(screen.getByRole('button', { name: 'Close' })).toBeDefined();
  });

  it('skips query when pokemonId is empty', () => {
    renderPokemonInfo({ pokemonId: null });

    expect(useGetPokemonByNameQuery).toHaveBeenCalledWith('', { skip: true });
  });

  it('calls onClose when Close is clicked', () => {
    const { onClose } = renderPokemonInfo();

    fireEvent.click(screen.getByRole('button', { name: 'Close' }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
