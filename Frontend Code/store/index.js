import { configureStore } from "@reduxjs/toolkit";
import connectReducer from "./connectSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
  reducer: { connect: connectReducer, task: taskReducer },
});
