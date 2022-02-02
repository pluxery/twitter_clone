import React, {useContext, useEffect, useState} from 'react';

import TwitterIcon from "@mui/icons-material/Twitter";
import {NavLink, useNavigate} from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import {Button} from "@mui/material";
import {SignInContext} from "./SignInContext";
import './Login.css'
import {useRequest} from "../hooks/useRequest";
import {useToast} from "../hooks/useToast";


export default function Login() {
    const {request,error,clearError } = useRequest()
    const userData = useContext(SignInContext)
    const message = useToast()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const navigate = useNavigate()

    const loginHandler = async () => {
        try {
            const response = await request('/sign/login', 'POST', {...form})
            userData.login(response.token, response.userId)
            navigate('/')
        }catch (e) {

        }
    }

    return (

        <body className="login">
        <div className={"login__window"}>
            <TwitterIcon className={"sidebar__twitterIcon"}/>

            <input className={"login__field"}
                   placeholder={"email"}
                   type='text'
                   name='email'
                   value={form.email}
                   onChange={changeHandler}/>

            <input className={"login__field"}
                   placeholder={"password"}
                   type='password'
                   name='password'
                   value={form.password}
                   onChange={changeHandler}/>

            <Button className={"login__buttonLogin"}
                    onClick={loginHandler}>
                Войти
            </Button>

            <NavLink to={'/signup'}>
                <p>Зарегестрироваться</p>
            </NavLink>

            <div className={"login__icons"}>
                <GoogleIcon className={"login__googleIcon"} fontSize={"large"}/>
                <InstagramIcon className={"login__instIcon"} fontSize={"large"}/>
                <AppleIcon className={"login__appleIcon"} fontSize={"large"}/>
                <FacebookIcon className={"login__facebookIcon"} fontSize={"large"}/>
            </div>

        </div>
        </body>


    );
}
