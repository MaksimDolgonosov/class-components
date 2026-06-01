import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../src/store';

type RenderWithRouterOptions = RenderOptions & {
  route?: string;
};

export const renderWithRouter = (
  ui: ReactElement,
  { route = '/', ...options }: RenderWithRouterOptions = {}
) =>
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </Provider>,
    options
  );
