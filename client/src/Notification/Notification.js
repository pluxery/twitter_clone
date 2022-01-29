import React from 'react';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import './Notification.css'
import {NavLink} from "react-router-dom";
import Layout from "../Layout/Layout";
import NotificationFragmentAll from "./NotificationFragmentAll";


export default function Notification({children = <NotificationFragmentAll/>}) {
    return (

        <Layout active={true}>
            <div className={"notification"}>
                <div className={"notification__header"}>
                    <h2>Notifications</h2>
                    <SettingsOutlinedIcon className={"actual__settingsIcon"}/>
                </div>
                <div className={"notification__headerButtons"}>
                    <div className={"notification__button"}>
                        <NavLink to={"/notifications"} className={"notification__navLink"}>All</NavLink>
                    </div>
                    <div className={"notification__button"}>
                        <NavLink to={"/notifications/mentions"} className={"notification__navLink"}>Mentions</NavLink>
                    </div>
                </div>
                <div className={"notification__content"}>
                    {children}
                </div>
            </div>
        </Layout>
    )



}