import React from 'react';
import App from '../../src/components/App/App';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import getPokemonListWithDescription from '../../src/services/fetchPokemons';
import { PokemonDescription } from '../../src/types/types';

vi.mock('../../src/services/fetchPokemons', () => ({
  default: vi.fn().mockResolvedValue({
    results: [],
    next: null,
    previous: null,
    errorMessage: null,
  }),
}));

describe('App', () => {
  it('renders', () => {
    const { getByText, getByRole } = render(<App />);

    expect(getByText('Pokemon finder')).toBeDefined();
    expect(getByRole('button', { name: 'Error test' })).toBeDefined();
    expect(getByRole('button', { name: 'Previous page' })).toBeDefined();
    expect(getByRole('button', { name: 'Next page' })).toBeDefined();
  });

  it('shows loading state when loading is true', async () => {
    vi.mock('../../src/services/fetchPokemons', () => ({
      default: vi.fn(() => new Promise(() => {})), // не резолвится
    }));
    const { getByAltText } = render(<App />);
    expect(getByAltText('spinner')).toBeDefined();
  });

  it('sets pokemon from localStorage to state on mount', async () => {
    vi.mocked(globalThis.localStorage.getItem).mockReturnValueOnce('pikachu');
    render(<App />);
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
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText('pikachu')).toBeDefined();
      expect(screen.getByText('Electric mouse')).toBeDefined();
    });
  });

  it('shows error message when API returns error', async () => {
    vi.mocked(getPokemonListWithDescription).mockRejectedValue(
      new Error('API error')
    );
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Server error: API error/)).toBeDefined();
    });
  });

  it('does not write to localStorage when search value is unchanged', async () => {
    vi.mocked(globalThis.localStorage.getItem).mockReturnValue('Pikachu');
    const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
    render(<App />);
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
});
