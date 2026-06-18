import dynamic from 'next/dynamic';

const Page404 = dynamic(() => import('../../views/Page404'));

export default function NotFound() {
  return <Page404 />;
}
