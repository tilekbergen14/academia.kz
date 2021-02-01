const user = (user = null, action) => {
    switch (action.type) {
        case "CREATE_USER":
            localStorage.setItem('profile', JSON.stringify(action.payload.data))
            return user = action.payload.data
        case "LOGIN":
            localStorage.setItem('profile', JSON.stringify(action.payload.data)) 
            return user = action.payload.data
        case "LOGIN_FROM_STORAGE":
            return user = action.payload
        case "LOG_OUT":
            localStorage.clear()
            return null
        default:
            return user
    }
}

export default user