"use client";
import { createSlice } from "@reduxjs/toolkit";
import type { initialStateProps } from "./posts.types";

const initialState = {
  data: [
    {
      id: 1,
      date: new Date().toISOString(),
      description: "testando posts",
      pinColor: "blue",
      time: 12,
      title: "Lavar o cabelo",
    },
    {
      id: 2,
      date: new Date().toISOString(),
      description: "testando posts-2",
      pinColor: "green",
      time: 12,
      title: "Lavar o pé",
    },
  ],
  status: "idle",
  error: null,
} as initialStateProps;

const postsSlate = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addPost } = postsSlate.actions;

export const selectAllPost = (state: initialStateProps) => {
  return state.data;
};

export default postsSlate.reducer;
