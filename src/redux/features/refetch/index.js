import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    refetch: {},
};

export const RefetchSlice = createSlice({
  name: "Refetch",
  initialState,
  reducers: {
    addrefetch: (state, { payload }) => {
          return {...state,refetch:payload}
    },
   
  },
});

// Action creators are generated for each case reducer function
export const { addrefetch, removeItem } = RefetchSlice.actions;

export const RefetchReducer = RefetchSlice.reducer;