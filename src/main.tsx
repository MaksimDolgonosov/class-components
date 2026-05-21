import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';
import './styles.scss';

const rootElement = document.getElementById('root');

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

if (basePath && window.location.pathname === basePath) {
  window.location.replace(
    `${import.meta.env.BASE_URL}${window.location.search}${window.location.hash}`
  );
}

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter
        basename={
          import.meta.env.BASE_URL.replace(/\/$/, '') || undefined
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
    </React.StrictMode>
  );
}
