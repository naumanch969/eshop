import { error, start, loginSuccess, registerSuccess } from "../reducers/user"
import * as api from '../api'

export const register = (user) => async (dispatch) => {
    dispatch(start())
    try {
        const data = await api.register(user)
        dispatch(registerSuccess())
    } catch (error) {
        dispatch(error())
        console.log('error in register', error)
    }
}

export const login = (user, navigate) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.login(user)
        dispatch(loginSuccess(data.result))
        navigate('/')
    } catch (error) {
        dispatch(error())
        console.log('error in login', error)
    }
}