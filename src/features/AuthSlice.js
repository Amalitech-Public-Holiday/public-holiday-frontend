import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        authStatus: false,
        username: ''
    }
});