'use client';

import { useState, useEffect, ChangeEvent, useContext } from 'react';
import { useTranslations } from 'next-intl';
import { TopControlsState, TopControlsProps } from '../../types/types';
import { ThemeContext } from '../../providers/ThemeProvider';
import { IThemeContext } from '../../types/types';
import './top-controls.scss';

const TopControls = ({ onSearch, placeholder }: TopControlsProps) => {
  const t = useTranslations('topControls');
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const [state, setState] = useState<TopControlsState>({
    search: placeholder || '',
  });

  useEffect(() => {
    setState({ search: placeholder || '' });
  }, [placeholder]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, search: e.target.value }));
  };

  const handleSearchClick = () => {
    const trimmed = state.search.trim();
    setState({ search: trimmed });
    onSearch(trimmed);
  };

  return (
    <div className="top-controls">
      <input
        className={`top-controls__input ${theme}`}
        type="text"
        placeholder={t('placeholder')}
        value={state.search}
        onChange={handleSearch}
      />
      <button className={`search-button ${theme}`} onClick={handleSearchClick}>
        {t('button')}
      </button>
    </div>
  );
};

export default TopControls;
