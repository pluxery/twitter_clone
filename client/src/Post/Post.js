import React, {useEffect, useState} from 'react'
import './Post.css'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../Actual/Trends/TrendsItem.css"
import {useRequest} from "../hooks/useRequest";


function Post({post}) {
    const {request} = useRequest()

    const retweetHandler = async () => {
        try {
            const postId = post._id
            await request('http://localhost:5000/retweet', 'POST', {postId})
        } catch (e) {
        }
    }


    return (
        <div className={"post"}>
            <div className={"post__avatar"}>
            </div>

            <div className={"post__body"}>
                <div className={"post__header"}>
                    <div className={"post__headerText"}>
                        <h3>
                                <span
                                    className={"post__nameText"}>
                                    {post.postedByUser.name}
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
                    {post.image ? <img src={post.image} alt={"not found"}/> : null}
                </div>

                <div className={"post__footer"}>
                    <ChatBubbleOutlineOutlinedIcon fontSize={"small"} className={"post__CommentIcon"}/>


                    <RepeatIcon onClick={retweetHandler} fontSize={"small"} className={"post__RetweetIcon"}/>


                    <FavoriteBorderIcon fontSize={"small"}
                                        className={"post__LikeIcon"}/> {post.likes}
                    <FileDownloadOutlinedIcon fontSize={"small"} className={"post__ShareIcon"}/>
                </div>
            </div>
        </div>
    )
}

export default Post