import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';
import AboutPage from './pages/AboutPage';
import Page404 from './pages/Page404';
import './styles.scss';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter
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
