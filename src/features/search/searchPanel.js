import { createSlice } from "@reduxjs/toolkit";

export const searchPanelSlice = createSlice({
  name: "showSearchPanel",
  initialState: {
    value: false,
  },
  reducers: {
    setShown: (state) => {
      state.value = true;
    },
    setHidden: (state) => {
      state.value = false;
    },
  },
});

export const { setShown, setHidden } = searchPanelSlice.actions;

export default searchPanelSlice.reducer;
