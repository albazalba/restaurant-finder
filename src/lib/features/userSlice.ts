import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface CounterState {
  user: object | null;
}

// Define the initial state using that type
const initialState: CounterState = {
  user: null,
};

export const counterSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
       state.user = null;
    },
  },
});

export const { setUser, removeUser } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: any) => state.counter.value;

export default counterSlice.reducer;
