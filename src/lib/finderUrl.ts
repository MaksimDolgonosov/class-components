type BuildFinderUrlOptions = {
  page: number;
  search?: string;
  pokemon?: string | null;
  forceError?: boolean;
};

export const buildFinderUrl = ({
  page,
  search = '',
  pokemon = null,
  forceError = false,
}: BuildFinderUrlOptions) => {
  const params = new URLSearchParams();
  params.set('page', String(page));

  if (search) {
    params.set('search', search);
  }

  if (forceError) {
    params.set('forceError', '1');
  }

  if (pokemon) {
    params.set('pokemon', pokemon);
    return `/pokemon?${params.toString()}`;
  }

  return `/?${params.toString()}`;
};

export type FinderSearchParams = {
  page?: string;
  search?: string;
  pokemon?: string;
  forceError?: string;
};

export const parseFinderSearchParams = (searchParams: FinderSearchParams) => {
  const page = Math.max(1, Number(searchParams.page ?? '1'));
  const search = searchParams.search?.trim() ?? '';
  const pokemon = searchParams.pokemon ?? null;
  const forceError = searchParams.forceError === '1';

  return {
    page,
    offset: (page - 1) * 10,
    search,
    pokemon,
    forceError,
  };
};
