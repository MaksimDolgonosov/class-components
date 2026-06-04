import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FormData } from '../types/types';

interface ISelectedPokemons {
  users: FormData[];
}

const initialState: ISelectedPokemons = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<FormData>) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.name !== action.payload);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
