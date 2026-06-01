import './theme-switcher.scss';
import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { IThemeContext } from '../../types/types';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext<IThemeContext>(ThemeContext);

  return (
    <div className="theme-switcher" role="group" aria-label="Theme switcher">
      <span
        className={`theme-switcher__option ${theme === 'light' ? `theme-switcher__option--active ${theme}` : ''}`}
        onClick={toggleTheme}
      >
        Light
      </span>
      <span
        className={`theme-switcher__option ${theme === 'dark' ? `theme-switcher__option--active ${theme}` : ''}`}
        onClick={toggleTheme}
      >
        Dark
      </span>
    </div>
  );
};

export default ThemeSwitcher;
