import React from 'react';
import App from '../../src/components/App/App';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

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
    render(<App />);
    expect(screen.getByText('Pokemon finder')).toBeDefined();
    expect(screen.getByPlaceholderText<HTMLInputElement>('Search for a pokemon')).toBeDefined();
    expect(screen.getByRole<HTMLButtonElement>('button', { name: 'Search' })).toBeDefined();
    expect(screen.getByRole<HTMLButtonElement>('button', { name: 'Error test' })).toBeDefined();
    expect(screen.getByRole<HTMLButtonElement>('button', { name: 'Previous page' })).toBeDefined();
    expect(screen.getByRole<HTMLButtonElement>('button', { name: 'Next page' })).toBeDefined();
  });

vi.mock('../../src/services/fetchPokemons', () => ({
  default: vi.fn(() => new Promise(() => {})), // не резолвится
}));

  it('shows loading state when loading is true', async () => {
    render(<App />);
    expect(screen.getByAltText('spinner')).toBeDefined();

  });


  // it('sets pokemon from localStorage to state on mount', async () => {
  //   vi.mocked(globalThis.localStorage.getItem).mockReturnValueOnce('pikachu');

  //   render(<App />);

  //   await waitFor(() => {
  //     const input = screen.getByPlaceholderText<HTMLInputElement>('Search for a pokemon');
  //     expect(input.value).toBe('pikachu');
  //   });
  // });
});