import { error, setProducts, setCurrentProduct, start, } from "../reducers/product"
import * as api from '../api'

export const getProducts = () => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.getProducts()
        dispatch(setProducts(data.result))
    } catch (error) {
        dispatch(error())
        console.log('error in getProducts', error)
    }
}

export const getProduct = (id) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.getProduct(id)
        dispatch(setCurrentProduct(data.result))
    } catch (error) {
        dispatch(error())
        console.log('error in getProduct', error)
    }
}

export const createProduct = (product) => async (dispatch) => {
    dispatch(start())
    try {
        const data = await api.createProduct(product)
        dispatch(registerSuccess())
    } catch (error) {
        dispatch(error())
        console.log('error in createProduct', error)
    }
}