import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHolidays } from "../controllers/holidaysAPI";

export const asyncFetchHolidays = createAsyncThunk(
    'holidays/getHolidays',
    async (queryString, thunkAPI) => {
        const data = await getHolidays(queryString);
        return data;
    }
);

export const holidays = createSlice({
    name: 'holidays',
    initialState: {
        holidays: [],
    }
});