import React from 'react';
import "../Login/Login.css"
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import {NavLink} from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";

function Register() {

    return (
        <div className={"login"}>

            <div className={"login__window"}>
                <TwitterIcon className={"sidebar__twitterIcon"}/>
                <input className={"login__field"} placeholder={"login"}/>
                <input className={"login__field"} placeholder={"name"}/>
                <input className={"login__field"} placeholder={"password"}/>
                <input className={"login__field"} placeholder={"repeat password"}/>
                <NavLink to={'/'} className={"login__buttonLogin"}>Registration</NavLink>

                <div className={"login__icons"}>

                    <GoogleIcon className={"login__googleIcon"} fontSize={"large"}/>
                    <InstagramIcon className={"login__instIcon"} fontSize={"large"}/>
                    <AppleIcon className={"login__appleIcon"} fontSize={"large"}/>
                    <FacebookIcon className={"login__facebookIcon"} fontSize={"large"}/>
                </div>
            </div>

        </div>
    )
}

export default Register;