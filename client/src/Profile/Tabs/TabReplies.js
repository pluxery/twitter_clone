import React, {useEffect, useState} from "react";
import "./Tabs.css"
import Profile from "../Profile";
import Tabs from "./Tabs";
import Post from "../../Post/Post";
import post_db from "../../Data/Post_db";
import {useRequest} from "../../hooks/useRequest";

export default function TabReplies() {
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
                {posts.slice(0).reverse().map(post => (<Post post={post}/>))}
            </Tabs>
        }/>
    )
}