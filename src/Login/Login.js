import React from 'react';
import "./Login.css"
import TwitterIcon from "@mui/icons-material/Twitter";

import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import {NavLink} from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";


function Login() {

    return (

        <body className="login">
            <div className={"login__window"}>
                <TwitterIcon className={"sidebar__twitterIcon"}/>

                <input className={"login__field"} placeholder={"login"}/>
                <input className={"login__field"} placeholder={"password"}/>

                <p className={"profile__textGray"}>Forgot password?</p>


                <NavLink to={'/'} className={"login__buttonLogin"}>login</NavLink>

                <div className={"login__icons"}>

                    <GoogleIcon className={"login__googleIcon"} fontSize={"large"}/>
                    <InstagramIcon className={"login__instIcon"} fontSize={"large"}/>
                    <AppleIcon className={"login__appleIcon"} fontSize={"large"}/>
                    <FacebookIcon className={"login__facebookIcon"} fontSize={"large"}/>
                </div>

            </div>
        </body>
    )
}

export default Login;