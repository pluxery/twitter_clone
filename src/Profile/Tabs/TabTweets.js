import React from "react";
import "./Tabs.css"
import Post from "../../Post/Post";

export default function TabTweets(){
    return(
        <div>
            <Post name={"Dranov"} user={"dranov"}
                  text={"Учение без размышления бесполезно, но и размышление без учения опасно"}
                  avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAx3uW6Gyx9pIyNquyecY-BMLVIZGx_KaDOMzJhcUMY01gviZzd6x8y2QYUOsWEbMLBo&usqp=CAU"}
                  image={"https://i.pinimg.com/originals/d2/6e/18/d26e18036945de590092c6e143e035dc.jpg"}
                  blueMark={true}/>

        </div>
    )
}