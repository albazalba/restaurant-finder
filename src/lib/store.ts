import { configureStore } from '@reduxjs/toolkit';
import favSlice from './features/favSlice';
import userSlice from './features/userSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      favourites: favSlice,
      user: userSlice
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
