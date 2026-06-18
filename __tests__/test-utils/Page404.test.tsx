import Page404 from '../../src/views/Page404';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Page404', () => {
  it('renders', () => {
    render(<Page404 />);
    expect(screen.getByText('Page not found')).toBeDefined();
    expect(
      screen.getByRole('link', { name: 'Back to the main page' })
    ).toBeDefined();
  });
});
