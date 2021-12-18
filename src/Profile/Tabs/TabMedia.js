import React from "react";
import "./Tabs.css"
import Profile from "../Profile";
import Tabs from "./Tabs";

export default function TabMedia(){
    return(
        <Profile tab={
            <Tabs>
                <h1>media</h1>
            </Tabs>
        }/>
    )
}