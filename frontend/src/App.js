import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import MainPage from './pages/MainPage'
import LibraryPage from './pages/LibraryPage'

function App() {
    return (
        <Router>
            <div>
                <h1>The quick brown fox jumped over the lazy dog</h1>
                <Link to="/">Main Page</Link>
                <br></br>
                <Link to="/Library">Library Page</Link>
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
