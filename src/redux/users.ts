import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {User} from '../types/Types';

interface UsersState {
  users: User[];
}
const initialState: UsersState = {
  users: [],
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addPlayer(state, action: PayloadAction<string>) {
      const user = {
        name: action.payload,
        wins: 0,
      };
      state.users.push(user);
    },
    addWin(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case "X":
          state.users[0].wins++;
          break;
        case "O":
          state.users[1].wins++;
          break;
        default:
          break;
      }
    },
    endGame(state) {
      state.users = [];
    },
  },
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
