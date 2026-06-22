export type CsvDownloadState = {
  csv: string | null;
  filename: string | null;
  error: string | null;
};

export const initialCsvDownloadState: CsvDownloadState = {
  csv: null,
  filename: null,
  error: null,
};
