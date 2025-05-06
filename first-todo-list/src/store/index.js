import { configureStore } from "@reduxjs/toolkit";
import reducer from "./todoSlice";

export const store =configureStore({
  reducer: {
    // Add your reducers here
    todo: reducer,
  },
});