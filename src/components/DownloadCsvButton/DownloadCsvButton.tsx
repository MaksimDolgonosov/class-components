'use client';

import { useActionState, useEffect } from 'react';
import { downloadPokemonCsv } from '../../actions/pokemonCsv';
import { initialCsvDownloadState } from '../../types/csvDownload';
import { PokemonDescription } from '../../types/types';

type DownloadCsvButtonProps = {
  pokemons: PokemonDescription[];
  label: string;
  theme: string;
};

const DownloadCsvButton = ({
  pokemons,
  label,
  theme,
}: DownloadCsvButtonProps) => {
  const [state, formAction, isPending] = useActionState(
    downloadPokemonCsv,
    initialCsvDownloadState
  );

  useEffect(() => {
    if (!state.csv || !state.filename) {
      return;
    }

    const blob = new Blob([state.csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = state.filename;
    link.click();
    URL.revokeObjectURL(url);
  }, [state]);

  return (
    <form action={formAction}>
      <input type="hidden" name="pokemons" value={JSON.stringify(pokemons)} />
      <button
        type="submit"
        className={`footer-button ${theme}`}
        disabled={isPending || pokemons.length === 0}
      >
        {label}
      </button>
    </form>
  );
};

export default DownloadCsvButton;
