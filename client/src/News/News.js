import React, {useEffect, useState} from 'react'
import "./News.css"
import Tweet from "../Tweet/Tweet";
import Post from "../Post/Post";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Layout from "../Layout/Layout";
import post_db from "../Data/Post_db";
import {useReqHandler} from "../hooks/useReqHandler";
import Search from "../Actual/Search";
import {Button} from "@mui/material";


function News() {
    const {request} = useReqHandler()
    const [posts, setPosts] = useState([])


    useEffect(async () => {
        try {
            const res = await request('http://localhost:5000/post')
            setPosts(res)
        } catch (e) {

        }
    }, [setPosts])

    return (
        <Layout active={true}>

            <div className={"news"}>
                <div className={"news__header"}>
                    <h2>Home</h2>
                    <AutoAwesomeOutlinedIcon className={"news__tweetStarIcon"}/>
                </div>


                <Tweet
                    avatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU"}/>


                {posts.slice(0).reverse().map(post => (<Post post={post}/>))}


            </div>
        </Layout>
    )
}

export default News