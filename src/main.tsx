import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import AboutPage from './views/AboutPage';
import Page404 from './views/Page404';
import { ThemeProvider } from './providers/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles.scss';

const rootElement = document.getElementById('root');

const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, '') || '/';

if (basePath && window.location.pathname === basePath) {
  window.location.replace(
    `${process.env.NEXT_PUBLIC_BASE_PATH}${window.location.search}${window.location.hash}`
  );
}

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
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
    </React.StrictMode>
  );
}
