import React from 'react';
import FollowItem from "./FollowItem";
import "../Actual.css";
import "./Follow.css";

export default function FollowWindow() {
    return (
        <div className={"actual__widgetContainer"}>
            <h2>Who to follow</h2>
            <div className={"follow__content"}>
                <FollowItem name={"ivan"} username={"va1987"}/>
                <FollowItem name={"petr"} username={"per2476"}/>
                <FollowItem name={"vlad"} username={"vlad123L"}/>
                <FollowItem name={"pup"} username={"pupa123"}/>
            </div>

        </div>
    )
}