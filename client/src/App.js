import React from 'react';
import './Layout/Layout.css'
import {BrowserRouter as Router,} from "react-router-dom";
import {SignInContext} from './Authorization/SignInContext'
import {useAuth} from "./hooks/useAuth";
import useRoutes from "./Routes";


function App() {
    const {token, login, logout, userId,} = useAuth()
    const isSignIn = !!token
    const routes = useRoutes(isSignIn)
    return (

        <SignInContext.Provider value={{token, login, logout, userId, isSignIn}}>
            <Router>
                {routes}
            </Router>
        </SignInContext.Provider>
    );
}


export default App;