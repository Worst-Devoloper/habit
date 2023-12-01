import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "./Redux/HabitSlice";
export const store = configureStore({
  reducer: {
    habitReducer,
   
  },
});
