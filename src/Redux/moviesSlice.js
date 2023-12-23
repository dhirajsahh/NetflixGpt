import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    getNowPlayingMovies: null,
  },
  reducers: {
    addNowPlayingmovies: (state, action) => {
      state.getNowPlayingMovies = action.payload;
    },
  },
});
export const { addNowPlayingmovies } = moviesSlice.actions;
export default moviesSlice.reducer;
