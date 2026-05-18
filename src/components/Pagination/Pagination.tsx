import { PaginationProps } from '../../types/types';

const Pagination = ({
  loading,
  previous,
  next,
  offset,
  onChangePage,
  handleErrorTest,
}: PaginationProps) => {
  return (
    <>
      {!loading ? (
        <div className="container-btns">
          <div className="container-btns-nav">
            <button
              disabled={previous === null}
              onClick={() => onChangePage('previous')}
            >
              Previous page
            </button>
            <span className="page-number">{offset + 1}</span>
            <button
              disabled={next === null}
              onClick={() => onChangePage('next')}
            >
              Next page
            </button>
          </div>
          <button className="error-test-btn" onClick={handleErrorTest}>
            Error test
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
