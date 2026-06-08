import { createSlice } from '@reduxjs/toolkit';
import { COUNTRIES } from '../constants/countries';

interface CountriesState {
  countries: readonly string[];
}

const initialState: CountriesState = {
  countries: COUNTRIES,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
});

export default countriesSlice.reducer;
