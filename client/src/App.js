import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Switch, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Footer from './components/Footer'
import Auth from "./components/Auth"
import Profile from './components/Profile'
import { useLocation, Redirect } from 'react-router-dom'
import Admin from "./components/Admin"

export default function App() {
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])
    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/auth/" exact>{user ? <Redirect to="/"/>: <Auth />}</Route>
                <Route path="/profile/" exact >{user ? <Profile />: <Redirect to="/" />}</Route>
                <Route path="/admin/" exact >{user ? <Admin />: <Redirect to="/" />}</Route>
            </Switch>
            <Footer />
        </div>
    )
}
