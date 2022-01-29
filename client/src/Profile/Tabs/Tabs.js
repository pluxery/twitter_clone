import React from "react";
import {NavLink} from "react-router-dom";
import "./Tabs.css"
import TabTweets from "./TabTweets";

export default function Tabs({children = <TabTweets/>}){
    return(

        <div className={"tabs"}>
            <div className={"tabs__header"}>
                <NavLink className={"tabs__link"} to={'/profile'}>Tweets</NavLink>
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