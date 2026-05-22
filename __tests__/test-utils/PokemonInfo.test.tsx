import PokemonInfo from '../../src/components/PokemonInfo/PokemonInfo';
import getPokemonInfo from '../../src/services/fetchPokemonInfo';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { renderWithRouter } from './renderWithRouter';

vi.mock('../../src/services/fetchPokemonInfo');

const outletContext = {
  pokemonId: 'pikachu',
  setPokemonId: vi.fn(),
};

const Layout = () => <Outlet context={outletContext} />;

describe('PokemonInfo', () => {
  beforeEach(() => {
    vi.mocked(getPokemonInfo).mockResolvedValue({
      name: 'pikachu',
      description: 'Electric mouse',
      imageUrl: 'pikachu.png',
      height: 4,
      weight: 60,
      baseExperience: 100,
      baseHappiness: 70,
      captureRate: 45,
    });
  });

  it('renders', async () => {
    renderWithRouter(
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="pokemon" element={<PokemonInfo />} />
        </Route>
      </Routes>,
      { route: '/pokemon' }
    );

    await waitFor(() => {
      expect(screen.getByText('PIKACHU')).toBeDefined();
      expect(screen.getByText('Electric mouse')).toBeDefined();
    });
    expect(screen.getByRole('button', { name: 'Close' })).toBeDefined();
  });
});
