import '../../styles.scss';
import { ClientOnly } from './client';

export function generateStaticParams() {
  return [
    { slug: [''] },
    { slug: ['about'] },
    { slug: ['pokemon'] },
  ];
}

export default function Page() {
  return <ClientOnly />;
}
