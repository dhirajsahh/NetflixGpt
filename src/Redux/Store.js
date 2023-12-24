import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./SearchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    searchGpt: searchReducer,
  },
});
