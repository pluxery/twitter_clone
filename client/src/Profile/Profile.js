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
import {NavLink} from "react-router-dom";
import {useRequest} from "../hooks/useRequest";
import {SignInContext} from "../Authorization/SignInContext";
import WcIcon from '@mui/icons-material/Wc';

const image = "https://i.pinimg.com/originals/11/94/bd/1194bd2b268f99c2f739ace4928ed2d9.jpg"
const avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAx3uW6Gyx9pIyNquyecY-BMLVIZGx_KaDOMzJhcUMY01gviZzd6x8y2QYUOsWEbMLBo&usqp=CAU"


function Profile({tab: tweetTab = <Tabs/>,}) {
    const {request} = useRequest()
    const {userId} = useContext(SignInContext)
    const [user, setUser] = useState({})

    const getUser = async () => {
        try {
            const response = await request(`/sign/user/${userId}`)
            setUser(response)
        }catch (e) {
            
        }
    }

    useEffect(() => getUser(), [setUser])


    return (

        <Layout active={true}>

            <div className={"profile"}>

                <div className={"profile__backBar"}>
                    <ArrowBackIcon className={"profile__backIcon"}/>
                    <div className={"profile__barNameTweets"}>
                        <h4>{user.name}</h4>
                        <p className={"profile__textGray"}>{"tweets"}</p>
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
                    <h2>{user.name} {<VerifiedIcon className={"post__mark"}/>}</h2>
                    <p>{"@" + user.name}</p>
                </div>

                <div className={"profile__miniInformation"}>
                    <FreeBreakfastOutlinedIcon className={"profile__coffeeIcon"}/>
                    <span>{'описание'}</span>
                </div>

                <div className={"profile__fullDescription"}>
                    {'студент двфу'}
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
                    <span className={"profile__textGray"}> <b className={"black"}>{'0'}</b> following</span>
                    <span className={"profile__textGray"}> <b className={"black"}>{'0'}</b> Followers</span>
                </div>

                {tweetTab}

            </div>

        </Layout>

    )
}

export default Profile;