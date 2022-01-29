import React from 'react';
import Layout from "../Layout/Layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {Button} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VerifiedIcon from "@mui/icons-material/Verified";
import FreeBreakfastOutlinedIcon from "@mui/icons-material/FreeBreakfastOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import {useParams} from "react-router-dom";
import profile_db from "../Data/Profile_db";


export default function User({
                                 avatar = profile_db.avatar
                             }) {
    const {id} = useParams();
    return (
        <Layout active={true}>

            <div className={"profile"}>

                <div className={"profile__backBar"}>
                    <ArrowBackIcon className={"profile__backIcon"}/>
                    <div className={"profile__barNameTweets"}>
                        <h4>{id}</h4>
                        <p className={"profile__textGray"}>666 tweets</p>
                    </div>
                </div>

                <div className={"profile__poster"}>
                    <img src={"https://i.pinimg.com/originals/11/94/bd/1194bd2b268f99c2f739ace4928ed2d9.jpg"} alt={""}/>
                </div>

                <div className={"profile__buttons"}>
                    <div>
                        <img src={avatar} className={"avatarUser"} alt={""}/>
                    </div>
                    <MoreHorizIcon className={"profile__moreIcon"}/>
                    <Button className={"profile__followButton"}>follow</Button>
                </div>

                <div className={"profile__userName"}>
                    <h2>{id} {<VerifiedIcon className={"post__mark"}/>}</h2>
                    <p>{"@" + id}</p>
                </div>

                <div className={"profile__miniInformation"}>
                    <FreeBreakfastOutlinedIcon className={"profile__coffeeIcon"}/>
                    <span>i'm user</span>
                </div>

                <div className={"profile__fullDescription"}>
                    text text text text...
                </div>
                <div className={"profile__geoAndDate"}>
                <span className={"profile__location"}> <LocationOnOutlinedIcon
                    className={"profile__geoIcon"}/>Vladivostok</span>
                    <span className={"profile__date"}> <DateRangeOutlinedIcon
                        className={"profile__dateIcon"}/> {"Joined " + "19.02.2021"}</span>
                </div>

                <div className={"profile__followInformation"}>
                    <span className={"profile__textGray"}> <b className={"black"}>15</b> following</span>
                    <span className={"profile__textGray"}> <b className={"black"}>57</b> Followers</span>
                </div>

            </div>

        </Layout>
    )
}