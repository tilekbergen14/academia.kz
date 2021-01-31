import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import { Switch, Route} from 'react-router-dom'
import Homepage from "./components/Homepage"

export default function App() {
    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Homepage}/>
            </Switch>
        </div>
    )
}
