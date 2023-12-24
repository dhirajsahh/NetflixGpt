import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import searchReducer from "./SearchSlice";
import configReducer from "./configSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    searchGpt: searchReducer,
    config: configReducer,
  },
});
