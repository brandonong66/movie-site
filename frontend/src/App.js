import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import MainPage from './pages/MainPage'
import LibraryPage from './pages/LibraryPage'
import Navbar from './components/Navbar'



function App() {
    return (
        <Router>
            <div>
                <Navbar />
                {/* <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/Library">
                        <LibraryPage />
                    </Route>
                    <Route path="/">
                        <MainPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
