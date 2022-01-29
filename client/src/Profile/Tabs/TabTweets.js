import React from "react";
import "./Tabs.css"
import Post from "../../Post/Post";
import post_db from "../../Data/Post_db";
import profile_db from "../../Data/Profile_db";

export default function TabTweets() {
    let post = post_db[1];
    return (
        <div>
            <Post name={profile_db.name}
                  user={profile_db.user}
                  avatar={profile_db.avatar}
                  text={post.text}
                  image={post.image}
                  blueMark={profile_db.mark}/>

        </div>
    )
}