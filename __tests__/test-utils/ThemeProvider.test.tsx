import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { describe, expect, it } from 'vitest';
import { ThemeContext, ThemeProvider } from '../../src/providers/ThemeProvider';

const ThemeConsumer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <span data-testid="theme">{theme}</span>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
    </>
  );
};

describe('ThemeProvider', () => {
  it('renders children', () => {
    render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Test')).toBeDefined();
  });

  it('toggleTheme switches theme from light to dark and back', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('light');

    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');

    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));
    expect(screen.getByTestId('theme')).toHaveTextContent('light');
  });
});
