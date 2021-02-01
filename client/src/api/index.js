import axios from "axios"

export const createUser = (user) => axios.post("http://localhost:5000/users/register", user)
export const login = (user) => axios.post('http://localhost:5000/users/login', user)