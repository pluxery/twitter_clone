import React from "react";
import "./Tabs.css"
import Tabs from "./Tabs";
import Profile from "../Profile";

export default function TabLikes(){
    return(


        <Profile tab={
            <Tabs>
                <h1>likes</h1>
            </Tabs>
        }/>

    )
}