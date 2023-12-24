import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    getNowPlayingMovies: null,
    getTrailerInfo: null,
    getPopularMovies: null,
    getTopRatedMovies: null,
    getUpcommingMovies: null,
    getTrendingMovies: null,
  },
  reducers: {
    addNowPlayingmovies: (state, action) => {
      state.getNowPlayingMovies = action.payload;
    },
    addTrailerInfo: (state, action) => {
      state.getTrailerInfo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.getPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.getTopRatedMovies = action.payload;
    },
    addUpcommingMovies: (state, action) => {
      state.getUpcommingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.getTrendingMovies = action.payload;
    },
  },
});
export const {
  addNowPlayingmovies,
  addTrailerInfo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcommingMovies,
  addTrendingMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
