import {createContext} from 'react'

function noop() {}

export const SignInContext = createContext({
    token: null,
    userId: null,
    login: noop,
    logout: noop,
    isSignIn: false
})