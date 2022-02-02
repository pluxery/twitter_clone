import React, {useContext, useEffect, useState} from "react";
import "./Tabs.css"
import Tabs from "./Tabs";
import Profile from "../Profile";
import Post from "../../Post/Post";
import {useRequest} from "../../hooks/useRequest";
import {SignInContext} from "../../Authorization/SignInContext";

export default function TabLikes() {
    const {request} = useRequest()
    const [posts, setPosts] = useState([])
    const {userId} = useContext(SignInContext)

    const getPost = async () => {
        try {
            const res = await request(`/post/liked/${userId}`)
            setPosts(res)
        } catch (e) {

        }
    }
    useEffect(() => getPost(), [setPosts])

    return (


        <Profile tab={
            <Tabs>
                {(posts.slice(0).reverse().map((post) => {
                    return (<Post post={post}/>)

                }))}
            </Tabs>
        }/>

    )
}