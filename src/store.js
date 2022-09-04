import { configureStore } from "@reduxjs/toolkit";
import searchPanelReducer from "./features/search/searchPanel";

export default configureStore({
  reducer: {
    searchPanel: searchPanelReducer,
  },
});
