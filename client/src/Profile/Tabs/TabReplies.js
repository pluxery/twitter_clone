import React, {useContext, useEffect, useState} from "react";
import "./Tabs.css"
import Profile from "../Profile";
import Tabs from "./Tabs";
import {useRequest} from "../../hooks/useRequest";
import Post from "../../Post/Post";
import {SignInContext} from "../../Authorization/SignInContext";

export default function TabReplies() {
    const {request} = useRequest()
    const [retweets, setRetweets] = useState([])
    const {userId} = useContext(SignInContext)


    const getPosts = async () => {
        try {
            const res = await request('/retweet/retweets', 'POST', {userId})
            setRetweets(res)
        } catch (e) {

        }
    }

    useEffect(() => getPosts(), [setRetweets])

    return (
        <Profile tab={
            <Tabs children={

                retweets.length > 0 ? retweets.slice(0).reverse().map(tweet => {
                        {
                            return (<Post post={tweet.post}/>)
                        }
                    })
                    : <h2>Нет ретвитов</h2>

            }/>
        }/>
    )
}