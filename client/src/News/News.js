import React, {useEffect, useState} from 'react'
import "./News.css"
import Tweet from "../Tweet/Tweet";
import Post from "../Post/Post";
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import Layout from "../Layout/Layout";
import {useRequest} from "../hooks/useRequest";


function News() {
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
        <Layout active={true}>

            <div className={"news"}>
                <div className={"news__header"}>
                    <h2>Home</h2>
                    <AutoAwesomeOutlinedIcon className={"news__tweetStarIcon"}/>
                </div>

                <Tweet/>

                {posts.slice(0).reverse().map(post => (<Post post={post}/>))}


            </div>
        </Layout>
    )
}

export default News