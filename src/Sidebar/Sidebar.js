import React from "react";
import "./Sidebar.css"
import "../App"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SidebarItem from "./SidebarItem";
import {NavLink} from "react-router-dom";
import AuthModal from "../AuthModal/AuthModal";
import ProfileCard from "./Card/ProfileCard";
import {Button} from "@mui/material";


function Sidebar() {

    return (
        <div className={"sidebar"}>
            <TwitterIcon className={"sidebar__twitterIcon"}/>

            <NavLink to={"/"} className={"sidebar__link"}>
                <SidebarItem Icon={HomeIcon} text={"Home"}/>
            </NavLink>

            <NavLink to={"/explore"} className={"sidebar__link"}>
                <SidebarItem Icon={TagIcon} text={"Explore"}/>
            </NavLink>

            <NavLink to={"/notifications"} className={"sidebar__link"}>
                <SidebarItem Icon={NotificationsNoneIcon} text={"Notifications"}/>
            </NavLink>

            <SidebarItem Icon={MailOutlineIcon} text={"Message"}/>
            <SidebarItem Icon={BookmarkBorderIcon} text={"Bookmarks"}/>
            <SidebarItem Icon={ListAltIcon} text={"Lists"}/>

            <NavLink to={"/profile"} className={"sidebar__link"}>
                <SidebarItem Icon={PermIdentityIcon} text={"Profile"}/>
            </NavLink>

            <SidebarItem Icon={MoreHorizIcon} text={"More"}/>
            <Button variant={"outlined"} className={"sidebar__tweet"} fullWidth>Tweet</Button>

            <ProfileCard/>
            <AuthModal/>


        </div>

    )
}

export default Sidebar;