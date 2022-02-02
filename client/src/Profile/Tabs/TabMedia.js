import React, {useEffect, useState} from "react";
import "./Tabs.css"
import Profile from "../Profile";
import Tabs from "./Tabs";
import Post from "../../Post/Post";
import {useRequest} from "../../hooks/useRequest";

export default function TabMedia() {
    const {request} = useRequest()
    const [posts, setPosts] = useState([])

    const getPosts = async () => {
        try {
            const res = await request('/post')
            setPosts(res)
        } catch (e) {

        }
    }

    useEffect(() => getPosts(), [setPosts])
    return (
        <Profile tab={
            <Tabs>
                {posts.map((post) => {
                    if (post.image) {
                        return (<Post post={post}/>)
                    }
                })}
            </Tabs>
        }/>
    )
}