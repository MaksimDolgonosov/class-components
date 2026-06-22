'use client';

import { useContext } from 'react';
import { useTranslations } from 'next-intl';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { setPokemons } from '../../store/pokemonSlice';
import { ThemeContext } from '../../providers/ThemeProvider';
import { IThemeContext } from '../../types/types';
import DownloadCsvButton from '../DownloadCsvButton/DownloadCsvButton';

const AppFooter = () => {
  const t = useTranslations('app');
  const { theme } = useContext<IThemeContext>(ThemeContext);
  const { pokemons: selectedPokemons } = useAppSelector(
    (state) => state.pokemons
  );
  const dispatch = useAppDispatch();

  return (
    <div className={`footer ${selectedPokemons.length > 0 ? 'active' : ''}`}>
      <button
        type="button"
        className={`footer-button ${theme}`}
        onClick={() => dispatch(setPokemons([]))}
      >
        {t('footer.pokemon.clear')}
      </button>
      <p>
        {t('footer.pokemon.selected')}
        {selectedPokemons.length}
      </p>
      <DownloadCsvButton
        pokemons={selectedPokemons}
        label={t('footer.pokemon.download')}
        theme={theme}
      />
    </div>
  );
};

export default AppFooter;
