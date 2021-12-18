import React from 'react';
import {NavLink} from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import {Button} from "@mui/material";
import {useModal} from "react-hooks-use-modal";


export default function AuthModal() {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    return (
        <>


            <Button className={"sidebar__buttonAuth"} onClick={open}>Sign</Button>
            <Modal>
                <div className={"sidebar__modalWindow"}>
                    <div className={"login__window"}>
                        <TwitterIcon className={"sidebar__twitterIcon"}/>
                        <h2>Sign in to Twitter</h2>
                        <div className={"sidebar__modal"}>
                            <LoginIcon/>
                            <NavLink className={"sidebar__modalText"} to={"/login"} onClick={close}>Login</NavLink>
                        </div>

                        <div className={"sidebar__modal"}>
                            <HowToRegIcon/>
                            <NavLink to={"/register"} className={"sidebar__modalText"}
                                     onClick={close}>Registration</NavLink>
                        </div>
                        <p className={"profile__textGray"}>________________________</p>
                        <div className={"login__icons"}>

                            <GoogleIcon className={"login__googleIcon"} fontSize={"large"}/>
                            <InstagramIcon className={"login__instIcon"} fontSize={"large"}/>
                            <AppleIcon className={"login__appleIcon"} fontSize={"large"}/>
                            <FacebookIcon className={"login__facebookIcon"} fontSize={"large"}/>
                        </div>
                    </div>
                    <Button className={"login__buttonModal"} onClick={close}>close</Button>
                </div>
            </Modal>
        </>

    )
}