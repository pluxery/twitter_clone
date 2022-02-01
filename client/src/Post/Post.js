import React, {useContext, useEffect, useState} from 'react'
import './Post.css'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../Actual/Trends/TrendsItem.css"
import {useRequest} from "../hooks/useRequest";
import {SignInContext} from "../Authorization/SignInContext";
import {NavLink} from "react-router-dom";


function Post({post}) {
    const {request} = useRequest()
    const {userId} = useContext(SignInContext)

    const retweetHandler = async () => {
        try {
            const postId = post._id
            await request('http://localhost:5000/retweet', 'POST', {postId})
        } catch (e) {
        }
    }


    const [likes, setLikes] = useState(post.likes.length)

    const pushLike = async () => {
        const res = await request(`http://localhost:5000/post/like_post/${post._id}`, 'POST', {userId})
        setLikes(res + 1)
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

                    <div>
                        <FavoriteBorderIcon onClick={pushLike} fontSize={"small"}
                                            className={"post__LikeIcon"}/> {likes}
                    </div>
                    <FileDownloadOutlinedIcon fontSize={"small"} className={"post__ShareIcon"}/>
                </div>
            </div>
        </div>
    )
}

export default Post