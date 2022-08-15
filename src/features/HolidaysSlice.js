import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHolidays } from "../controllers/holidaysAPI";

export const asyncFetchHolidays = createAsyncThunk(
    'holidays/getHolidays',
    async (queryString, thunkAPI) => {
      const data = await getHolidays(queryString);
      return data;
    }
);

const holidaysSlice = createSlice({
  name: 'holidays',
  initialState: {
    holidays: [],
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(asyncFetchHolidays.fulfilled, (state, action) => {
        state.holidays = action.payload.data;
    })
  }
});

export default holidaysSlice.reducer;