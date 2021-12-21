import React from "react";
import "./Tabs.css"
import Tabs from "./Tabs";
import Profile from "../Profile";
import post_db from "../../Data/Post_db";
import Post from "../../Post/Post";

export default function TabLikes() {
    return (


        <Profile tab={
            <Tabs>
                {post_db.map((item, pos) => {
                        if (item.like === true) {
                            return (
                                <Post name={item.name}
                                      text={item.text}
                                      user={item.user}
                                      avatar={item.avatar}
                                      image={item.image}
                                      blueMark={item.blueMark}
                                      like={item.like}
                                />
                            )

                        }
                    }
                )
                }
            </Tabs>
        }/>

    )
}