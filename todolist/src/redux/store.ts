"use client";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./feature/posts/postsSlice";
export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
