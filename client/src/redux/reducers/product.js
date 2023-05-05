import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        currentProduct: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        start: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        setCurrentProduct: (state, action) => {
            state.isFetching = false
            state.currentProduct = action.payload
            state.error = false
        },
        setProducts: (state, action) => {
            state.isFetching = false
            state.products = action.payload
        },
        error: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const { start, setProducts, setCurrentProduct, error } = productSlice.actions;
export default productSlice.reducer;