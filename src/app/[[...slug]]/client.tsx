'use client';

import dynamic from 'next/dynamic';

const AppShell = dynamic(() => import('./app-shell'), { ssr: false });

export function ClientOnly() {
  return <AppShell />;
}
