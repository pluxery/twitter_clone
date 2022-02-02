import React, {useEffect, useState} from 'react';
import TwitterIcon from "@mui/icons-material/Twitter";
import {NavLink, useNavigate} from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import {Button} from "@mui/material";
import './Login.css'
import WcIcon from "@mui/icons-material/Wc";
import {useRequest} from "../hooks/useRequest";
import {useToast} from "../hooks/useToast";


export default function Register() {
    const {request, error, clearError} = useRequest()
    const message = useToast()
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        age: null,
        sex: '',
        city: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const navigate = useNavigate()

    const registerHandler = async () => {
        try {
            const res = await request('/sign/register', 'POST', {...form})

            message(res.data)
            navigate('/')
        } catch (e) {

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

            <input className={"login__field"}
                   placeholder={'age'}
                   type='text'
                   name='age'
                   value={form.age}
                   onChange={changeHandler}/>


            <div className={'edit-field'}>
                <WcIcon className={"sidebar__twitterIcon"}/>

                <input className={"edit-input"}
                       id='m'
                       type='radio'
                       name='sex'
                       value={'man'}
                       onChange={changeHandler}/>
                <label htmlFor={'m'}>man</label>

                <input className={"edit-input"}
                       id='g'
                       type='radio'
                       name='sex'
                       value={'girl'}
                       onChange={changeHandler}/>
                <label htmlFor={'g'}>woman</label>
            </div>

            <input className={"login__field"}
                   placeholder={'city'}
                   type='text'
                   name='city'
                   value={form.city}
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
