import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "login",
  initialState: {
    login: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    LoginUser: (state, action) => {
      state.login = action.payload;
    },
  },
});
export const { LoginUser } = UserSlice.actions;
export default UserSlice.reducer;
