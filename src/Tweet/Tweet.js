import React from 'react'
import "./Tweet.css"
import {Button, Avatar} from "@mui/material";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import GifIcon from '@mui/icons-material/Gif';
import MoodIcon from '@mui/icons-material/Mood';
import DateRangeIcon from '@mui/icons-material/DateRange';

function Tweet({avatar}) {
    return (
        <div className="tweet">
            <form>
                <div className={"tweet__input"}>
                    <Avatar
                        src={avatar}/>
                    <input placeholder={"What's happening?"} type={"text"}/>
                </div>
                <div className={"tweet__iconItems"}>
                    <span>
                        <CropOriginalIcon className={"tweet__icon"}/>
                        <GifIcon className={"tweet__icon"}/>
                        <MoodIcon className={"tweet__icon"}/>
                        <DateRangeIcon className={"tweet__icon"}/>
                    </span>
                    <Button className={"tweet__button"}>Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default Tweet