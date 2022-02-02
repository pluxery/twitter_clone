import React, {useContext, useEffect, useState} from "react";
import "./Tabs.css"
import Post from "../../Post/Post";
import {useRequest} from "../../hooks/useRequest";
import {SignInContext} from "../../Authorization/SignInContext";

export default function TabTweets() {
    const {request} = useRequest()
    const [posts, setPosts] = useState([])
    const {userId} = useContext(SignInContext)


    const getPosts = async () => {
        try {
            const res = await request('/post')
            setPosts(res)
        } catch (e) {

        }
    }

    useEffect(() => getPosts(), [setPosts])

    return (
        <div>
            {posts.length > 0 ? posts.slice(0).reverse().map(post => {
                    if (userId === post.postedByUser._id) {
                        return (<Post post={post}/>)
                    }
                })
                : <h2>Нет твитов</h2>}
        </div>
    )
}