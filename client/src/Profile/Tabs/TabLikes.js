import React, {useEffect, useState} from "react";
import "./Tabs.css"
import Tabs from "./Tabs";
import Profile from "../Profile";
import Post from "../../Post/Post";
import {useRequest} from "../../hooks/useRequest";

export default function TabLikes() {
    const {request} = useRequest()
    const [posts, setPosts] = useState([])


    useEffect(() => {
        const getPost = async () => {
            const res = await request('http://localhost:5000/post')
            setPosts(res)
        }
        getPost();

    }, [setPosts])
    return (


        <Profile tab={
            <Tabs>
                {posts.map((item) => {
                        if (item.like === true) {
                            return (<Post post={item}/>)
                        }
                    }
                )
                }
            </Tabs>
        }/>

    )
}