import { useTranslations } from 'next-intl';
import { PaginationProps } from '../../types/types';

const Pagination = ({
  loading,
  previous,
  next,
  offset,
  onChangePage,
  handleErrorTest,
}: PaginationProps) => {
  const t = useTranslations('pagination');
  return (
    <>
      {!loading ? (
        <div className="container-btns">
          <div className="container-btns-nav">
            <button
              disabled={previous === null}
              onClick={() => onChangePage('previous')}
            >
              {t('previous')}
            </button>
            <span className="page-number">{offset + 1}</span>
            <button
              disabled={next === null}
              onClick={() => onChangePage('next')}
            >
              {t('next')}
            </button>
          </div>
          <button className="error-test-btn" onClick={handleErrorTest}>
            {t('errorTest')}
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
