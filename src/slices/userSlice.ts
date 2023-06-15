import { User } from '@/components/home/BetaTest';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  user: User | null;
  showInTheTable: boolean;
}

const initialState: UserState = {
  user: null,
  showInTheTable: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    listUserToTheTable: (state) => {
      state.showInTheTable = true;
    },
    delistUserFromTheTable: (state) => {
      state.showInTheTable = false;
    },
  },
});

export const {
  setUser,
  clearUser,
  listUserToTheTable,
  delistUserFromTheTable,
} = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectShowInTheTable = (state) =>
  state.user.showInTheTable;

export default userSlice.reducer;
