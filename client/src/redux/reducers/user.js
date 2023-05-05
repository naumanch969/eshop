import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        loginSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.isFetching = false;
            state.error = false;
        },
        registerSuccess: (state) => {
            state.isFetching = false;
            state.error = false;
        },
        logout: (state) => {
            state.currentUser = null;
        },
        error: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { start, loginSuccess, registerSuccess, logout, error } = userSlice.actions;
export default userSlice.reducer;