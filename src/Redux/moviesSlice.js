import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    getNowPlayingMovies: null,
    getTrailerInfo: null,
  },
  reducers: {
    addNowPlayingmovies: (state, action) => {
      state.getNowPlayingMovies = action.payload;
    },
    addTrailerInfo: (state, action) => {
      state.getTrailerInfo = action.payload;
    },
  },
});
export const { addNowPlayingmovies, addTrailerInfo } = moviesSlice.actions;
export default moviesSlice.reducer;
