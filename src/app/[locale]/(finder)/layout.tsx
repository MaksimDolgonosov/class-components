import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import AppThemeWrapper from '../../../components/AppThemeWrapper/AppThemeWrapper';
import AppHeader from '../../../components/AppHeader/AppHeader';
import AppFooter from '../../../components/AppFooter/AppFooter';
import '../../../components/App/app.scss';

type FinderLayoutProps = {
  list: React.ReactNode;
  panel: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const FinderLayout = async ({ list, panel, params }: FinderLayoutProps) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('app');

  return (
    <AppThemeWrapper>
      <h1 className="title">{t('title')}</h1>
      <br />
      <Suspense fallback={null}>
        <AppHeader />
      </Suspense>
      <br />
      <div className="layout">
        <div className="container">{list}</div>
        {panel}
      </div>
      <AppFooter />
    </AppThemeWrapper>
  );
};

export default FinderLayout;
