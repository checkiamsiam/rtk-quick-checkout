import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.users = payload;
    },
    createUser(state, { payload }) {
      // process data here
      state.users.push(payload);
    },
  },
});

const userReducer = userSlice.reducer;

export const { setUser, createUser } = userSlice.actions;

export default userReducer;
