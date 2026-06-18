'use client';

import { Provider } from 'react-redux';
import { ThemeProvider } from '../providers/ThemeProvider';
import { store } from '../store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
