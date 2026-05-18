import { vi } from 'vitest';

type MockResponse<T> = {
  ok?: boolean;
  status?: number;
  data: T;
};

export function mockFetchSequence(responses: MockResponse<unknown>[]) {
  const fetchMock = vi.fn();

  responses.forEach(({ ok = true, status = 200, data }) => {
    fetchMock.mockResolvedValueOnce({
      ok,
      status,
      json: async () => data,
    });
  });

  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

export function restoreFetchMock() {
  vi.unstubAllGlobals();
}
