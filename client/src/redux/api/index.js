import axios from 'axios'
import Cookie from 'js-cookie'

const API = axios.create({ baseURL: 'http://localhost:5000' })
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem('persist:admin')).user).currentUser.token

const isAdmin = false

API.interceptors.request.use((req) => {
    // const token = Cookie.get('profile')
    // req.headers.auth_token = token
    if (isAdmin) {
        req.headers.auth_token = TOKEN
    }
    return req;
})


export const register = (userData) => API.post(`/user/register`, userData)
export const login = (userData) => API.put(`/user/login`, userData)


// products
export const getProducts = () => API.get(`/product/all`)
export const getProduct = (productId) => API.get(`/product/get/${productId}`)
// export const getCategoryProducts = (category) => API.get(`/product/all?category=${category}`)
export const createProduct = (product) => API.post(`/product/create`, product)
// export const updateProduct = (productId, productData) => API.put(`/product/update/${productId}`, productData)
export const deleteProduct = (productId) => API.delete(`/product/delete/${productId}`)