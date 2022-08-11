import {createSlice} from '@reduxjs/toolkit';

export const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        authStatus: false,
        username: ''
    },
    reducers: {
        login: (state, action) => {
            state.authStatus = true;
            state.username = action.payload;
        }
    }
});