import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

export default function Profile() {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleLogout = () => {
        dispatch({type: "LOG_OUT"})
        history.push("/")
    }
    return (
        <div className="m-4">
            <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
        </div>
    )
}
