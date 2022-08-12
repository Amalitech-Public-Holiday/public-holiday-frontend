import { createSlice } from "@reduxjs/toolkit";

export const holidays = createSlice({
    name: 'holidays',
    initialState: {
        holidays: [],
    }
});