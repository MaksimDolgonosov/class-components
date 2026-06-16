'use client';

import { StrictMode, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../components/App/App';
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo';
import AboutPage from '../../views/AboutPage';
import Page404 from '../../views/Page404';
import { ThemeProvider } from '../../providers/ThemeProvider';
import { store } from '../../store';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '/';

export default function AppShell() {
  useEffect(() => {
    if (basePath && window.location.pathname === basePath) {
      window.location.replace(
        `${process.env.NEXT_PUBLIC_BASE_PATH}${window.location.search}${window.location.hash}`
      );
    }
  }, []);

  return (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <BrowserRouter
            basename={
              process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || undefined
            }
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="pokemon" element={<PokemonInfo />} />
              </Route>
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
}
