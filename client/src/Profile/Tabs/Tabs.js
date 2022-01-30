import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import "./Tabs.css"
import TabTweets from "./TabTweets";
import {SignInContext} from "../../Authorization/SignInContext";

export default function Tabs({children = <TabTweets/>}) {
    const {userId} = useContext(SignInContext)
    return (

        <div className={"tabs"}>
            <div className={"tabs__header"}>
                <NavLink className={"tabs__link"} to={`/profile/${userId}`}>Tweets</NavLink>
                <NavLink className={"tabs__link"} to={'/profile/tweets_with_replies'}>Tweets & replies</NavLink>
                <NavLink className={"tabs__link"} to={'/profile/media'}>Media</NavLink>
                <NavLink className={"tabs__link"} to={'/profile/likes'}>Likes</NavLink>
            </div>

            <div className={"tabs__content"}>
                {children}
            </div>

        </div>
    )
}