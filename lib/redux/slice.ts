import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReduxState } from "@/redux/store";

interface AppState {
  query: string;
  jokeIndex: number;
}

const initialState = { query: "", jokeIndex: 0 } as AppState;

const min = 0;
const max = 9;

// Clamp number between two values with the following line:
const clamp = (num: number) => Math.min(Math.max(num, min), max);

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    incrementJokeIndex(state) {
      state.jokeIndex = clamp(state.jokeIndex + 1);
    },
    decrementJokeIndex(state) {
      state.jokeIndex = clamp(state.jokeIndex - 1);
    },
    setJokesIndex(state, action: PayloadAction<number>) {
      state.jokeIndex = clamp(action.payload);
    },
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
  },
});

export const {
  incrementJokeIndex,
  decrementJokeIndex,
  setQuery,
  setJokesIndex,
} = appSlice.actions;

export const selectAppState = (state: ReduxState) => state.appSlice;
