import React from "react";
import "./Tabs.css"
import Profile from "../Profile";
import Tabs from "./Tabs";
import post_db from "../../Data/Post_db";
import Post from "../../Post/Post";

export default function TabMedia() {
    return (
        <Profile tab={
            <Tabs>
                {post_db.map((item, pos) => {
                        if (item.image) {
                            return (
                                <Post name={item.name}
                                      text={item.text}
                                      user={item.user}
                                      avatar={item.avatar}
                                      image={item.image}
                                      blueMark={item.blueMark}
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