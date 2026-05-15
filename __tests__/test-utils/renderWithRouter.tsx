import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

type RenderWithRouterOptions = RenderOptions & {
  route?: string;
};

export const renderWithRouter = (
  ui: ReactElement,
  { route = '/', ...options }: RenderWithRouterOptions = {}
) =>
  render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>, options);
