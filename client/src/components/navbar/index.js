import React, { useEffect } from 'react'
import Header from "./NavHeader"
import Links from './NavLinks'
import { useDispatch } from "react-redux"

export default function Navbar() {
    const dispatch = useDispatch()
    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('profile'))
        if(result){
            dispatch({type: "LOGIN_FROM_STORAGE", payload: result.user})
        }
    }, [dispatch])
    return (
        <div className="">
            <Header />
            <Links />
        </div>
    )
}
