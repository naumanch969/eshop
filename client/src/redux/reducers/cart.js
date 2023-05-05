import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (cartState, action) => {
            cartState.quantity += 1
            cartState.products.push(action.payload)
            cartState.total += action.payload.price * action.payload.quantity
        },
    },
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer
