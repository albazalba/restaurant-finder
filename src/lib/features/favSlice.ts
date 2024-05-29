import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface CounterState {
  items: object[];
}

// Define the initial state using that type
const initialState: CounterState = {
  items: [],
};

export const counterSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return {
        //@ts-ignore
        items: [...state?.items?.filter((item) => item.id !== action.payload)],
      };
    },
  },
});

export const { addFavorite, removeFavorite } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: any) => state.counter.value;

export default counterSlice.reducer;
