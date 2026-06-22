'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '../../i18n/navigation';
import { buildFinderUrl } from '../../lib/finderUrl';
import PokemonInfo from '../PokemonInfo/PokemonInfo';

const PokemonInfoPanelContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pokemonId = searchParams?.get('pokemon') ?? null;
  const page = Math.max(1, Number(searchParams?.get('page') ?? '1'));
  const search = searchParams?.get('search') ?? '';

  return (
    <PokemonInfo
      pokemonId={pokemonId}
      onClose={() =>
        router.push(buildFinderUrl({ page, search }))
      }
    />
  );
};

const PokemonInfoPanel = () => {
  return (
    <Suspense fallback={null}>
      <PokemonInfoPanelContent />
    </Suspense>
  );
};

export default PokemonInfoPanel;
