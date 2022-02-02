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

    const getPosts = async () => {
        try {
            const res = await request('/post')
            setPosts(res)
        }catch (e) {

        }
    }

    useEffect(() => getPosts(), [setPosts])

    return (
        <Layout active={true}>

            <div className={"news"}>
                <div className={"news__header"}>
                    <h2>Home</h2>
                    <AutoAwesomeOutlinedIcon className={"news__tweetStarIcon"}/>
                </div>

                <Tweet/>

                {posts.length > 0 ?
                    posts.slice(0).reverse().map(post =>
                        (<Post post={post}/>)) :
                    <h2>Нет постов</h2>}


            </div>
        </Layout>
    )
}

export default News