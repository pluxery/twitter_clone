import React, {useContext, useEffect, useState} from 'react'
import './Post.css'
import {Avatar} from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../Actual/Trends/TrendsItem.css"
import {useParams} from "react-router-dom";
import {useReqHandler} from "../hooks/useReqHandler";
import axios from "axios";
import Layout from "../Layout/Layout";

function PostId() {

    const {request} = useReqHandler
    const params = useParams();

    const [post, setPost] = useState({
        avatar: ''
    })

    useEffect(async () => {
        try {
            const response = await axios(`http://localhost:5000/post/${params.id}`)
            setPost(response.data)
        } catch (e) {

        }
    }, [setPost])


    return (
        <Layout>
            <div className={"post"}>
                <div className={"post__avatar"}>
                    <Avatar src={post.avatar}/>
                </div>

                <div className={"post__body"}>
                    <div className={"post__header"}>
                        <div className={"post__headerText"}>
                            <h3>
                                <span
                                    className={"post__nameText"}>{'user'}
                                    {post.blueMark && <VerifiedIcon className={"post__mark"}/>}
                                </span>

                                <span className={"post__moreIcon"}>
                                <MoreHorizIcon className={"trendsItem__moreIcon"}/>
                            </span>
                            </h3>

                        </div>

                        <div className={"post__headerDescription"}>
                            <p>{post.text}</p>
                        </div>
                    </div>

                    <div className={"post__image"}>
                        {<img src={post.image} alt={"not found"}/>}

                    </div>

                    <div className={"post__footer"}>
                        <ChatBubbleOutlineOutlinedIcon fontSize={"small"} className={"post__CommentIcon"}/>
                        <RepeatIcon fontSize={"small"} className={"post__RetweetIcon"}/>
                        <FavoriteBorderIcon fontSize={"small"}
                                            className={post.like ? "post__redLikeIcon" : "post__LikeIcon"}/>
                        <FileDownloadOutlinedIcon fontSize={"small"} className={"post__ShareIcon"}/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostId