import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemonSlice';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
