import React, {useEffect, useState} from "react";
import "./Tabs.css"
import Post from "../../Post/Post";
import profile_db from "../../Data/Profile_db";
import {useRequest} from "../../hooks/useRequest";

export default function TabTweets() {
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
        <div>
            {posts.slice(0).reverse().map(post => (<Post post={post}/>))}
        </div>
    )
}