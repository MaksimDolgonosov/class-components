import type { Metadata } from 'next';
import '../../styles.scss';
import AboutPage from '../../views/AboutPage';

export const metadata: Metadata = {
  title: 'About | Pokemon finder',
  description: 'Information about the Pokemon finder app and the author.',
};

export default function Page() {
  return <AboutPage />;
}
