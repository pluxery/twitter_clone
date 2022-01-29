import React from "react";
import "./Tabs.css"
import Profile from "../Profile";
import Tabs from "./Tabs";
import Post from "../../Post/Post";
import post_db from "../../Data/Post_db";

export default function TabReplies() {
    let post = post_db[0];
    return (
        <Profile tab={
            <Tabs>
                <Post name={post.name}
                      user={post.user}
                      text={post.text}
                      avatar={post.avatar}
                      image={post.image}
                      blueMark={post.blueMark}/>
            </Tabs>
        }/>
    )
}