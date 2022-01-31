import React, {useEffect, useState} from "react";
import "./Tabs.css"
import Profile from "../Profile";
import Tabs from "./Tabs";
import {useRequest} from "../../hooks/useRequest";
import Retweet from "../../Tweet/Retweet";
import Post from "../../Post/Post";

export default function TabReplies() {
    const {request} = useRequest()
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        const getTweet = async () => {
            const res = await request('http://localhost:5000/retweet')
            setTweets(res)
        }
        getTweet();

    }, [setTweets])
    return (
        <Profile tab={
            <Tabs>
                {tweets.slice(0).reverse().map(tweet => (<Post post={tweet.postId}/>))}
            </Tabs>
        }/>
    )
}