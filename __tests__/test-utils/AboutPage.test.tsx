import AboutPage from '../../src/views/AboutPage';
import { describe, it, expect } from 'vitest';
import { renderWithRouter } from './renderWithRouter';

describe('AboutPage', () => {
  it('renders', () => {
    const { getByText, getByRole } = renderWithRouter(<AboutPage />);
    expect(getByText('About Page')).toBeDefined();
    expect(
      getByRole('button', { name: 'Back to the main page' })
    ).toBeDefined();
  });
});
