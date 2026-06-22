import AboutPage from '../../src/views/AboutPage';
import { describe, it, expect, vi } from 'vitest';
import { renderWithRouter } from './renderWithRouter';

vi.mock('next-intl/server', () => ({
  getTranslations: async () => (key: string) => {
    const messages: Record<string, string> = {
      title: 'About Page',
      intro: 'Hello! My name is Maksim Dolgonosov.',
      github: 'My GitHub:',
      course: 'React course:',
      back: 'Back to the main page',
    };
    return messages[key] ?? key;
  },
}));

describe('AboutPage', () => {
  it('renders', async () => {
    const page = await AboutPage();
    const { getByText, getByRole } = renderWithRouter(page);
    expect(getByText('About Page')).toBeDefined();
    expect(
      getByRole('link', { name: 'Back to the main page' })
    ).toBeDefined();
  });
});
