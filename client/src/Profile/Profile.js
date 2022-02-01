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
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useRequest} from "../hooks/useRequest";
import {SignInContext} from "../Authorization/SignInContext";
import WcIcon from '@mui/icons-material/Wc';


function Profile({
                     avatar = profile_db.avatar,
                     tweets = profile_db.tweets,
                     mark = profile_db.mark,
                     followers = profile_db.followers,
                     following = profile_db.following,
                     image = profile_db.image,
                     miniDescription = profile_db.miniDescription,
                     fullDescription = profile_db.fullDescription,
                     tab = <Tabs/>,
                 }) {


    const {request} = useRequest()
    const {userId} = useContext(SignInContext)

    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            const response = await request(`http://localhost:5000/sign/user/${userId}`)
            if (response === null)return;
            setUser(response)
        }
        getUser();
    }, [setUser])



    return (

        <Layout active={true}>

            <div className={"profile"}>

                <div className={"profile__backBar"}>
                    <ArrowBackIcon className={"profile__backIcon"}/>
                    <div className={"profile__barNameTweets"}>
                        <h4>{user.name | 'user'}</h4>
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
                    <NavLink to={'/profile/edit'} className={'sidebar__link'}>
                        <Button className={"profile__followButton"}>set up profile</Button>
                    </NavLink>
                </div>

                <div className={"profile__userName"}>
                    <h2>{user.name} {mark && <VerifiedIcon className={"post__mark"}/>}</h2>
                    <p>{"@" + user.name}</p>
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
                    className={"profile__geoIcon"}/>{user.city}</span>

                    <span className={"profile__date"}> <DateRangeOutlinedIcon
                        className={"profile__dateIcon"}/> {"Age:  " + user.age}</span>

                    <span className={"profile__location"}> <WcIcon
                    className={"profile__geoIcon"}/>{user.sex}</span>
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