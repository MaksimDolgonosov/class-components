import { useState, useEffect, ChangeEvent } from 'react';
import { TopControlsState, TopControlsProps } from '../../types/types';
import './top-controls.scss';

const TopControls = ({ onSearch, placeholder }: TopControlsProps) => {
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
        type="text"
        placeholder="Search for a pokemon"
        value={state.search}
        onChange={handleSearch}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default TopControls;
