import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "./redux/reducers/habit-reducer";

export const store = configureStore({
  reducer: {
    habitReducer
  }
});
