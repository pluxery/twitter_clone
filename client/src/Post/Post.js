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

    const [retweeted, setRetweeted] = useState(false)
    const [liked, setLiked] = useState(false)

    const retweetHandler = async () => {
        try {
            const postId = post._id
            await request('/retweet/retweet', 'POST', {postId, userId})
            setRetweeted(true)
        } catch (e) {
        }
    }


    const [likes, setLikes] = useState(post.countLikes.length)

    const pushLike = async () => {
        const res = await request(`/post/like/`, 'POST', {userId, postId: post._id})
        setLikes(res.countLikes.length + 1)
        setLiked(true)
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


                    <RepeatIcon onClick={retweetHandler} fontSize={"small"}
                                className={retweeted ? "post__RetweetIcon_green": null}/>

                    <div>
                        <FavoriteBorderIcon onClick={pushLike} fontSize={"small"}
                                            className={liked? "post__redLikeIcon": "post__LikeIcon" }/> {
                        likes
                    }
                    </div>
                    <FileDownloadOutlinedIcon fontSize={"small"} className={"post__ShareIcon"}/>
                </div>
            </div>
        </div>
    )
}

export default Post