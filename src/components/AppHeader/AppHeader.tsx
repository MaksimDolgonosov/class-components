'use client';

import { useContext } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '../../i18n/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { Link } from '../../i18n/navigation';
import { buildFinderUrl } from '../../lib/finderUrl';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from '../LangSwitcher/LangSwitcher';
import { ThemeContext } from '../../providers/ThemeProvider';
import { IThemeContext } from '../../types/types';

const AppHeader = () => {
  const t = useTranslations('app');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { theme } = useContext<IThemeContext>(ThemeContext);

  const page = Math.max(1, Number(searchParams?.get('page') ?? '1'));
  const search = searchParams?.get('search') ?? '';
  const pokemon = pathname?.endsWith('/pokemon')
    ? searchParams?.get('pokemon')
    : null;

  const handleForceError = () => {
    router.push(
      buildFinderUrl({ page, search, pokemon, forceError: true })
    );
  };

  const handleRefresh = () => {
    router.refresh();
  };

  return (
    <div className="app-header-actions">
      <button
        type="button"
        className={`about-error-test ${theme}`}
        onClick={handleForceError}
      >
        {t('header.actions.error')}
      </button>
      <button
        type="button"
        className={`about-refetch ${theme}`}
        onClick={handleRefresh}
      >
        {t('header.actions.refetch')}
      </button>
      <Link href="/about" className="about-button">
        {t('header.actions.about')}
      </Link>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};

export default AppHeader;
