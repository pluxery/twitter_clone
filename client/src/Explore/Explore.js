import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";

import "./Explore.css"

import Trends from "../Actual/Trends/Trends";
import Post from "../Post/Post";
import {MoreHorizOutlined} from "@material-ui/icons";
import post_db from "../Data/Post_db";
import {useReqHandler} from "../hooks/useReqHandler";
import {Button} from "@material-ui/core";

export default function Explore() {

    const {request} = useReqHandler()
    const [posts, setPosts] = useState([])

    const [form, setForm] = useState({
        text: ''
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const findHandler = async () => {
        try {
            const res = await request('http://localhost:5000/post/search', 'POST', {...form})
            setPosts(res)
        } catch (e) {
        }
    }

    return (
        <Layout active={false}>
            <div className={"explore"}>
                <Trends/>

                <div className="actual__input">

                    <input
                        placeholder={'Введите текст поста'}
                        name={'text'}
                        type={'text'}
                        value={form.text}
                        onChange={changeHandler}/>
                </div>
                <Button onClick={findHandler}>Поиск по тексту</Button>

                <div className={"explore__headerPosts"}>
                    <h2>Recommendation</h2>
                    <MoreHorizOutlined className={"explore__moreIcon"}/>
                </div>

                {posts.map((post) => {
                        return (
                            <Post post={post}/>
                        )
                    }
                )
                }
            </div>
        </Layout>
    )
}