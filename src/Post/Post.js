import React from 'react'
import './Post.css'
import {Avatar} from "@mui/material";
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import VerifiedIcon from '@mui/icons-material/Verified';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../Actual/Trends/TrendsItem.css"

function Post({name, user, blueMark, image, avatar, text, like}) {
    return (
        <div className={"post"}>
            <div className={"post__avatar"}>
                <Avatar src={avatar}/>
            </div>

            <div className={"post__body"}>
                <div className={"post__header"}>
                    <div className={"post__headerText"}>
                        <h3>
                                <span className={"post__nameText"}>{name}
                                    {blueMark && <VerifiedIcon className={"post__mark"}/>}
                                    <span className={"post__user"}>{"@" + user}</span>
                                </span>

                            <span className={"post__moreIcon"}>
                                <MoreHorizIcon className={"trendsItem__moreIcon"}/>
                            </span>
                        </h3>

                    </div>

                    <div className={"post__headerDescription"}>
                        <p>{text}</p>
                    </div>
                </div>

                <div className={"post__image"}>
                    <img src={image} alt={"not found"}/>
                </div>

                <div className={"post__footer"}>
                    <ChatBubbleOutlineOutlinedIcon fontSize={"small"} className={"post__CommentIcon"}/>
                    <RepeatIcon fontSize={"small"} className={"post__RetweetIcon"}/>
                    <FavoriteBorderIcon fontSize={"small"} className={like ? "post__redLikeIcon" : "post__LikeIcon"}/>
                    <FileDownloadOutlinedIcon fontSize={"small"} className={"post__ShareIcon"}/>
                </div>
            </div>
        </div>
    )
}

export default Post