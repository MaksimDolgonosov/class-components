import './theme-switcher.scss';

const ThemeSwitcher = () => {
  return (
    <div className="theme-switcher" role="group" aria-label="Theme switcher">
      <span className="theme-switcher__option theme-switcher__option--active">
        Light
      </span>
      <span className="theme-switcher__option">Dark</span>
    </div>
  );
};

export default ThemeSwitcher;
