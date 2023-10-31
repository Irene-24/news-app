import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReduxState } from "@/redux/store";
import { JOKES_SIZE } from "../constants";

interface Currency {
  symbol: string;
  value: number;
}
interface AppState {
  query: string;
  jokeIndex: number;
  from: Currency;
  to: Currency;
}

const initialState = { query: "", jokeIndex: 0 } as AppState;

const min = 0;
const max = JOKES_SIZE - 1;

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
    setFromVal(state, action: PayloadAction<number>) {
      state.from.value = action.payload;
    },
    setToVal(state, action: PayloadAction<number>) {
      state.to.value = action.payload;
    },
    setFromSym(state, action: PayloadAction<string>) {
      state.from.symbol = action.payload;
    },
    setToSym(state, action: PayloadAction<string>) {
      state.to.symbol = action.payload;
    },
  },
});

export const {
  incrementJokeIndex,
  decrementJokeIndex,
  setQuery,
  setToSym,
  setToVal,
  setFromSym,
  setFromVal,
  setJokesIndex,
} = appSlice.actions;

export const selectAppState = (state: ReduxState) => state.appSlice;
