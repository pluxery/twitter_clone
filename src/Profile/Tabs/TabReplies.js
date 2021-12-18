import React from "react";
import "./Tabs.css"
import Profile from "../Profile";
import Tabs from "./Tabs";
import Post from "../../Post/Post";

export default function TabReplies(){
    return(
        <Profile tab={
            <Tabs>
                <Post name={"Dranov"} user={"dranov"}
                      text={"Учение без размышления бесполезно, но и размышление без учения опасно"}
                      avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAx3uW6Gyx9pIyNquyecY-BMLVIZGx_KaDOMzJhcUMY01gviZzd6x8y2QYUOsWEbMLBo&usqp=CAU"}
                      image={"https://klike.net/uploads/posts/2019-06/1560329641_2.jpg"}
                      blueMark={true}/>
            </Tabs>
        }/>
    )
}