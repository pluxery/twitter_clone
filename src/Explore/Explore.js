import React from 'react';
import Layout from "../Layout/Layout";

import "./Explore.css"

import Trends from "../Actual/Trends/Trends";
import Post from "../Post/Post";
import {MoreHorizOutlined} from "@material-ui/icons";
import post_db from "../Data/Post_db";

export default function Explore() {
    return (
        <Layout active={false}>
            <div className={"explore"}>
                <Trends/>
                <div className={"explore__headerPosts"}>
                    <h2>Recommendation</h2>
                    <MoreHorizOutlined className={"explore__moreIcon"}/>
                </div>

                {post_db.map((item, pos) => {
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
                )
                }
            </div>
        </Layout>
    )
}