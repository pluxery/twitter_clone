import React, {useContext, useEffect, useState} from "react";

import "./Profile.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import {Button} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import Layout from "../Layout/Layout";
import Tabs from "./Tabs/Tabs";
import profile_db from "../Data/Profile_db";
import {useParams} from "react-router-dom";
import axios from "axios";


function Profile({
                     user = profile_db.user,
                     avatar = profile_db.avatar,
                     tweets = profile_db.tweets,
                     mark = profile_db.mark,
                     followers = profile_db.followers,
                     following = profile_db.following,
                     image = profile_db.image,
                     location = profile_db.location,
                     dateRegistration = profile_db.dateRegistration,
                     miniDescription = profile_db.miniDescription,
                     fullDescription = profile_db.fullDescription,
                     tab = <Tabs/>,
                 }) {

    const {id} = useParams()
    const [username, setUsername] = useState()

    useEffect(async () => {
        try {
            const response = await axios.post(`http://localhost:5000/sign/user/${id}`)
            setUsername(response.data)
        } catch (e) {
        }
    }, [setUsername])


    return (

        <Layout active={true}>

            <div className={"profile"}>

                <div className={"profile__backBar"}>
                    <ArrowBackIcon className={"profile__backIcon"}/>
                    <div className={"profile__barNameTweets"}>
                        <h4>{username}</h4>
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
                    <h2>{username} {mark && <VerifiedIcon className={"post__mark"}/>}</h2>
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





            </div>

        </Layout>

    )
}

export default Profile;