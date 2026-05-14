import TopControls from '../../src/components/TopControls/TopControls';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('TopControls', () => {
  it('renders', () => {
    render(<TopControls onSearch={vi.fn()} placeholder="test placeholder" />);
    expect(
      screen.getByPlaceholderText<HTMLInputElement>('Search for a pokemon')
    ).toBeDefined();
    expect(
      screen.getByRole<HTMLButtonElement>('button', { name: 'Search' })
    ).toBeDefined();
  });

  it('shows input value when placeholder is changed', () => {
    render(<TopControls onSearch={vi.fn()} placeholder="pikachu" />);
    const input = screen.getByPlaceholderText<HTMLInputElement>(
      'Search for a pokemon'
    );
    expect(input.value).toBe('pikachu');
  });
});
