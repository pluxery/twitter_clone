import React, {useContext, useEffect, useState} from 'react'
import "./Tweet.css"
import {Button, Avatar} from "@mui/material";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import GifIcon from '@mui/icons-material/Gif';
import MoodIcon from '@mui/icons-material/Mood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {SignInContext} from "../Authorization/SignInContext";
import {useReqHandler} from "../hooks/useReqHandler";
import axios from "axios";

function Tweet({avatar}) {

    const {request} = useReqHandler()
    const [form, setForm] = useState({
        text: String,
        avatar: avatar,

    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }


    const addHandler = async () => {
        const res = await request('http://localhost:5000/post', 'POST', {...form})
    }


    return (
        <div className="tweet">
            <form>
                <div className={"tweet__input"}>
                    <Avatar
                        src={avatar}/>
                    <input placeholder={"What's happening?"}
                           type={"text"}
                           name={'text'}
                           value={form.text}
                           onChange={changeHandler}/>
                </div>
                <div className={"tweet__iconItems"}>
                    <span>
                        <CropOriginalIcon className={"tweet__icon"}/>
                        <GifIcon className={"tweet__icon"}/>
                        <MoodIcon className={"tweet__icon"}/>
                        <DateRangeIcon className={"tweet__icon"}/>
                    </span>
                    <Button className={"tweet__button"}
                            onClick={addHandler}>Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default Tweet