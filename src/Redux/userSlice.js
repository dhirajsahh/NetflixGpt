import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "userdetails",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
