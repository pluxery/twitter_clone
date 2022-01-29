import React, {useContext, useState} from 'react';
import axios from 'axios'
import TwitterIcon from "@mui/icons-material/Twitter";
import {NavLink, useNavigate} from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import {Button} from "@mui/material";
import './Login.css'


export default function Register() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const navigate = useNavigate()

    const registerHandler = async () => {
        try {
            const response = await axios.post('http://localhost:5000/sign/register', {...form})}
        catch (e) {
        }
    }

    return (

        <body className="login">
        <div className={"login__window"}>
            <TwitterIcon className={"sidebar__twitterIcon"}/>

            <input className={"login__field"}
                   placeholder={"name"}
                   type='text'
                   name='name'
                   value={form.name}
                   onChange={changeHandler}/>

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
                    onClick={registerHandler}>
                    Зарегестрироваться
            </Button>

            <NavLink to={'/'}>
                <p>Войти</p>
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
