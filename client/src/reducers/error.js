const error = (error = null, action) => {
    switch (action.type) {
        case "SET_AUTH_ERROR":
            return error = action.payload
        default:
            return error
    }
}

export default error