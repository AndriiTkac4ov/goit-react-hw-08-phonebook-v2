import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
      filterList(state, action) {
        return state = action.payload.toLowerCase()
      },
  },
});

export const { filterList } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;