import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types/types';

interface ISelectedPokemons {
  users: User[];
}

const initialState: ISelectedPokemons = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.unshift(action.payload);
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
