import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App/App';
import PokemonInfo from './components/PokemonInfo/PokemonInfo';

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
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
