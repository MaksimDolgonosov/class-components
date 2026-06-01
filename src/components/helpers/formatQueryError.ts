import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

export const formatQueryError = (
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  if (!error) {
    return null;
  }

  if ('status' in error) {
    if (typeof error.status === 'number') {
      return `Server error: ${error.data}, status: ${error.status}`;
    }

    return 'Server error';
  }

  return 'Unknown error';
};
