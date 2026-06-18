'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from '../../../../i18n/navigation';
import PokemonInfo from '../../../../components/PokemonInfo/PokemonInfo';

function PokemonPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pokemonId = searchParams?.get('pokemon') ?? null;
  const page = searchParams?.get('page') ?? '1';

  return (
    <PokemonInfo
      pokemonId={pokemonId}
      onClose={() => router.push(`/?page=${page}`)}
    />
  );
}

export default function PokemonPage() {
  return (
    <Suspense fallback={null}>
      <PokemonPageContent />
    </Suspense>
  );
}
