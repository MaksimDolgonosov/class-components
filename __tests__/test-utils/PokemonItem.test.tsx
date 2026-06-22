import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { waitFor } from '@testing-library/react';
import PokemonItem from '../../src/components/PokemonItem/PokemonItem';
import { PokemonItemProps } from '../../src/types/types';
import { renderWithRouter } from './renderWithRouter';

const props: PokemonItemProps = {
  name: 'pikachu',
  description: 'Electric mouse',
  imageUrl: 'pikachu.png',
  page: 1,
  search: '',
};

describe('PokemonItem', () => {
  it('renders', () => {
    renderWithRouter(<PokemonItem {...props} />);

    expect(screen.getByText('pikachu')).toBeDefined();
    expect(screen.getByText('Electric mouse')).toBeDefined();
    expect(screen.getByRole('checkbox')).toBeDefined();
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('checks checkbox when clicked', async () => {
    renderWithRouter(<PokemonItem {...props} />);
    fireEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(screen.getByRole('checkbox')).toBeChecked();
    });
  });
});
