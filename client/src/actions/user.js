import * as api from '../api'

export const createUser = (user) => async (dispatch) => {
    try{
        const result = await api.createUser(user)
        dispatch({type: "CREATE_USER", payload: result.data})
    }
    catch(err){
        dispatch({type: "SET_AUTH_ERROR", payload: err.response.data})
    }
} 

export const login = (data) => {
    return async (dispatch) => {
        try{
            const user = await api.login(data)
            console.log(user)
            dispatch({type: "LOGIN", payload: user})
        }
        catch(err){
            dispatch({type: "SET_AUTH_ERROR", payload: err.response.data})
        }
    }
}