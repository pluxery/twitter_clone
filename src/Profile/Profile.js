import React from "react";

import "./Profile.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import {Avatar, Button} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Layout from "../Layout/Layout";
import Tabs from "./Tabs/Tabs";


function Profile({
                     user = "dranov",
                     avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAx3uW6Gyx9pIyNquyecY-BMLVIZGx_KaDOMzJhcUMY01gviZzd6x8y2QYUOsWEbMLBo&usqp=CAU",
                     name = "Dranov",
                     tweets = "1",
                     mark = true,
                     followers = "213",
                     following = "543",
                     image = "https://i.pinimg.com/originals/11/94/bd/1194bd2b268f99c2f739ace4928ed2d9.jpg",
                     location = "Vladivostok",
                     dateRegistration = "March 2020",
                     miniDescription = "Student FEFU",
                     fullDescription = "здесь описание.",
                     tab = <Tabs/>,
                 }) {
    return (

        <Layout active={true}>

            <div className={"profile"}>

                <div className={"profile__backBar"}>
                    <ArrowBackIcon className={"profile__backIcon"}/>
                    <div className={"profile__barNameTweets"}>
                        <h4>{name}</h4>
                        <p className={"profile__textGray"}>{tweets + " tweets"}</p>
                    </div>
                </div>

                <div className={"profile__poster"}>
                    <img src={image} alt={""}/>
                </div>


                <div className={"profile__buttons"}>
                    <div>
                        <img src={avatar} className={"avatarProfile"} alt={""}/>
                    </div>
                    <MoreHorizIcon className={"profile__moreIcon"}/>
                    <Button className={"profile__followButton"}>set up profile</Button>
                </div>

                <div className={"profile__userName"}>
                    <h2>{name} {mark && <VerifiedIcon className={"post__mark"}/>}</h2>
                    <p>{"@" + user}</p>
                </div>

                <div className={"profile__miniInformation"}>
                    <FreeBreakfastOutlinedIcon className={"profile__coffeeIcon"}/>
                    <span>{miniDescription}</span>
                </div>

                <div className={"profile__fullDescription"}>
                    {fullDescription}
                </div>
                <div className={"profile__geoAndDate"}>
                <span className={"profile__location"}> <LocationOnOutlinedIcon
                    className={"profile__geoIcon"}/>{location}</span>
                    <span className={"profile__date"}> <DateRangeOutlinedIcon
                        className={"profile__dateIcon"}/> {"Joined " + dateRegistration}</span>
                </div>

                <div className={"profile__followInformation"}>
                    <span className={"profile__textGray"}> <b className={"black"}>{following}</b> following</span>
                    <span className={"profile__textGray"}> <b className={"black"}>{followers}</b> Followers</span>
                </div>


                {tab}


            </div>

        </Layout>

    )
}

export default Profile;