import { getTranslations } from 'next-intl/server';
import { Link } from '../../i18n/navigation';
import { buildFinderUrl } from '../../lib/finderUrl';

type PaginationLinksProps = {
  page: number;
  hasPrevious: boolean;
  hasNext: boolean;
  search: string;
  pokemon?: string | null;
};

const PaginationLinks = async ({
  page,
  hasPrevious,
  hasNext,
  search,
  pokemon = null,
}: PaginationLinksProps) => {
  const t = await getTranslations('pagination');

  return (
    <div className="container-btns">
      <div className="container-btns-nav">
        {hasPrevious ? (
          <Link
            href={buildFinderUrl({
              page: page - 1,
              search,
              pokemon,
            })}
          >
            {t('previous')}
          </Link>
        ) : (
          <span className="pagination-disabled">{t('previous')}</span>
        )}
        <span className="page-number">{page}</span>
        {hasNext ? (
          <Link
            href={buildFinderUrl({
              page: page + 1,
              search,
              pokemon,
            })}
          >
            {t('next')}
          </Link>
        ) : (
          <span className="pagination-disabled">{t('next')}</span>
        )}
      </div>
    </div>
  );
};

export default PaginationLinks;
