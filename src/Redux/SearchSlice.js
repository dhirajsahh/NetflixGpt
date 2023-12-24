import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchGpt",
  initialState: {
    searchGptValue: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.searchGptValue = !state.searchGptValue;
    },
  },
});
export const { toggleGptSearch } = searchSlice.actions;
export default searchSlice.reducer;
