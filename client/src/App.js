import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Switch, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"
import Footer from './components/Footer'
import Auth from "./components/Auth"

export default function App() {
    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Homepage}/>
                <Route path="/auth/" exact component={Auth}/>
            </Switch>
            <Footer />
        </div>
    )
}
