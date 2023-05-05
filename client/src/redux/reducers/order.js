import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        isFetching: false,
        error: false,
    },
    reducers: {
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        error: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { start, error } = orderSlice.actions;
export default orderSlice.reducer;