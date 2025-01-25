import { configureStore } from "@reduxjs/toolkit";
import textsReducer from "./texts/textsSlice";

export const store = configureStore({
  reducer: {
    texts: textsReducer,
  },
});
