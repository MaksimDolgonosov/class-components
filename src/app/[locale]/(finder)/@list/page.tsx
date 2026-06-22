import { Suspense } from 'react';
import { setRequestLocale } from 'next-intl/server';
import SearchResultsColumn from '../../../../components/SearchResults/SearchResultsColumn';
import Spinner from '../../../../components/Spinner/Spinner';
import { FinderSearchParams } from '../../../../lib/finderUrl';

type ListPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<FinderSearchParams>;
};

const ListPage = async ({ params, searchParams }: ListPageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <Suspense fallback={<Spinner />}>
      <SearchResultsColumn searchParams={searchParams} />
    </Suspense>
  );
};

export default ListPage;
