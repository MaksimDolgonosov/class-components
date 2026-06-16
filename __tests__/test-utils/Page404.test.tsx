import Page404 from '../../src/views/Page404';
import { describe, it, expect } from 'vitest';
import { renderWithRouter } from './renderWithRouter';

describe('Page404', () => {
  it('renders', () => {
    const { getByText, getByRole } = renderWithRouter(<Page404 />);
    expect(getByText('Page not found')).toBeDefined();
    expect(
      getByRole('button', { name: 'Back to the main page' })
    ).toBeDefined();
  });
});
