import App from '../../src/components/App/App';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import getPokemonListWithDescription from '../../src/services/fetchPokemons';
import { renderWithRouter } from './renderWithRouter';

const renderApp = () => renderWithRouter(<App />);

const defaultPokemonListResponse = {
  results: [],
  next: null,
  previous: null,
  errorMessage: null,
};

vi.mock('../../src/services/fetchPokemons', () => ({
  default: vi.fn(),
}));

describe('App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(getPokemonListWithDescription).mockResolvedValue(
      defaultPokemonListResponse
    );
  });

  it('renders', async () => {
    const { getByText } = renderApp();

    expect(getByText('Pokemon finder')).toBeDefined();
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Error test' })).toBeDefined();
      expect(screen.getByRole('button', { name: 'Previous page' })).toBeDefined();
      expect(screen.getByRole('button', { name: 'Next page' })).toBeDefined();
    });
  });

  it('shows loading state when loading is true', async () => {
    vi.mocked(getPokemonListWithDescription).mockImplementation(
      () => new Promise(() => {})
    );
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
    vi.mocked(getPokemonListWithDescription).mockResolvedValue({
      results: [
        {
          name: 'pikachu',
          description: 'Electric mouse',
          imageUrl: 'pikachu.png',
        },
      ],
      next: null,
      previous: null,
      errorMessage: null,
    });
    renderApp();

    await waitFor(() => {
      expect(screen.getByText('pikachu')).toBeDefined();
      expect(screen.getByText('Electric mouse')).toBeDefined();
    });
  });

  it('shows error message when API returns error', async () => {
    vi.mocked(getPokemonListWithDescription).mockRejectedValue(
      new Error('API error, status: 404')
    );
    renderApp();
    await waitFor(() => {
      expect(
        screen.getByText(/Server error: API error, status: 404/)
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
    vi.mocked(getPokemonListWithDescription)
      .mockResolvedValueOnce({
        results: [
          {
            name: 'pikachu',
            description: 'Electric mouse',
            imageUrl: 'pikachu.png',
          },
        ],
        next: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10',
        previous: null,
        errorMessage: null,
      })
      .mockResolvedValueOnce({
        results: [
          {
            name: 'bulbasaur',
            description: 'Seed pokemon',
            imageUrl: 'bulbasaur.png',
          },
        ],
        next: null,
        previous: 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0',
        errorMessage: null,
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
      expect(getPokemonListWithDescription).toHaveBeenNthCalledWith(
        2,
        'https://pokeapi.co/api/v2/pokemon?limit=10&offset=10'
      );
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
