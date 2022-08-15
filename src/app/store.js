import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from '../features/AuthSlice';
import HolidaysSlice from '../features/HolidaysSlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    holiday: HolidaysSlice
  },
});
