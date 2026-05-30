import App from '../../src/components/App/App';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { useGetPokemonsListQuery } from '../../src/api/apiSlice';
import { renderWithRouter } from './renderWithRouter';

const renderApp = () => renderWithRouter(<App />);

const defaultQueryResult = {
  data: {
    results: [],
    next: null,
    previous: null,
  },
  isLoading: false,
  isFetching: false,
  isError: false,
  error: undefined,
  refetch: vi.fn(),
};

vi.mock('../../src/api/apiSlice', async (importOriginal) => {
  const actual =
    await importOriginal<typeof import('../../src/api/apiSlice')>();
  return {
    ...actual,
    useGetPokemonsListQuery: vi.fn(),
  };
});

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useGetPokemonsListQuery).mockReturnValue(defaultQueryResult);
  });

  it('renders', async () => {
    const { getByText } = renderApp();

    expect(getByText('Pokemon finder')).toBeDefined();
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Error test' })).toBeDefined();
      expect(
        screen.getByRole('button', { name: 'Previous page' })
      ).toBeDefined();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeDefined();
    });
  });

  it('shows loading state when loading is true', async () => {
    vi.mocked(useGetPokemonsListQuery).mockReturnValue({
      ...defaultQueryResult,
      data: undefined,
      isFetching: true,
    });
    renderApp();
    expect(screen.getByAltText('spinner')).toBeDefined();
  });

  it('sets pokemon from localStorage to state on mount', async () => {
    vi.mocked(globalThis.localStorage.getItem).mockReturnValueOnce('pikachu');
    renderApp();
    await waitFor(() => {
      const input = screen.getByPlaceholderText<HTMLInputElement>(
        'Search for a pokemon'
      );
      expect(input.value).toBe('pikachu');
    });
  });

  it('gets pokemon list from API', async () => {
    vi.mocked(useGetPokemonsListQuery).mockReturnValue({
      ...defaultQueryResult,
      data: {
        results: [
          {
            name: 'pikachu',
            description: 'Electric mouse',
            imageUrl: 'pikachu.png',
          },
        ],
        next: null,
        previous: null,
      },
    });
    renderApp();

    await waitFor(() => {
      expect(screen.getByText('pikachu')).toBeDefined();
      expect(screen.getByText('Electric mouse')).toBeDefined();
    });
  });

  it('shows error message when API returns error', async () => {
    vi.mocked(useGetPokemonsListQuery).mockReturnValue({
      ...defaultQueryResult,
      data: undefined,
      isError: true,
      error: { status: 404, data: 'Not found' },
    });
    renderApp();
    await waitFor(() => {
      expect(
        screen.getByText(/Server error: Not found, status: 404/)
      ).toBeDefined();
    });
  });

  it('sets search value to localStorage when search is clicked', async () => {
    renderApp();
    const input = screen.getByPlaceholderText<HTMLInputElement>(
      'Search for a pokemon'
    );
    fireEvent.change(input, { target: { value: 'pikachu2' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    await waitFor(() => {
      expect(globalThis.localStorage.setItem).toHaveBeenCalledWith(
        'pokemon',
        'pikachu2'
      );
      expect(input.value).toBe('pikachu2');
    });
  });

  it('does not write to localStorage when search value is unchanged', async () => {
    vi.mocked(globalThis.localStorage.getItem).mockReturnValue('Pikachu');
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    renderApp();
    await waitFor(() => {
      expect(
        screen.getByPlaceholderText<HTMLInputElement>('Search for a pokemon')
          .value
      ).toBe('Pikachu');
    });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(setItemSpy).not.toHaveBeenCalledWith('pokemon', 'Pikachu');
    setItemSpy.mockRestore();
  });

  it('changes page using next link and renders new results', async () => {
    vi.mocked(useGetPokemonsListQuery).mockImplementation((arg) => {
      const offset =
        typeof arg === 'object' && arg !== null ? (arg.offset ?? 0) : 0;

      if (offset === 0) {
        return {
          ...defaultQueryResult,
          data: {
            results: [
              {
                name: 'pikachu',
                description: 'Electric mouse',
                imageUrl: 'pikachu.png',
              },
            ],
            next: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10',
            previous: null,
          },
        };
      }

      return {
        ...defaultQueryResult,
        data: {
          results: [
            {
              name: 'bulbasaur',
              description: 'Seed pokemon',
              imageUrl: 'bulbasaur.png',
            },
          ],
          next: null,
          previous: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
        },
      };
    });

    renderApp();

    let previousButton: HTMLButtonElement;
    let nextButton: HTMLButtonElement;

    await waitFor(() => {
      expect(screen.getByText('pikachu')).toBeDefined();
      previousButton = screen.getByRole<HTMLButtonElement>('button', {
        name: 'Previous page',
      });
      nextButton = screen.getByRole<HTMLButtonElement>('button', {
        name: 'Next page',
      });
      expect(previousButton).toBeDisabled();
      expect(nextButton).toBeEnabled();
    });

    fireEvent.click(nextButton!);

    await waitFor(() => {
      expect(useGetPokemonsListQuery).toHaveBeenCalledWith({
        limit: 10,
        offset: 10,
        forceError: false,
      });
      expect(screen.getByText('bulbasaur')).toBeDefined();
    });
  });

  it('shows errorBoundary message ', async () => {
    renderApp();
    const errorTestButton = await screen.findByRole('button', {
      name: 'Error test',
    });
    fireEvent.click(errorTestButton);
    await waitFor(() => {
      expect(
        screen.getByText('Something went wrong. Please try again later.')
      ).toBeDefined();
    });
  });
});
