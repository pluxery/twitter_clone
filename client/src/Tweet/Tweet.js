import React, {useContext, useState} from 'react'
import "./Tweet.css"
import {Button, Avatar} from "@mui/material";
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import GifIcon from '@mui/icons-material/Gif';
import MoodIcon from '@mui/icons-material/Mood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import {useRequest} from "../hooks/useRequest";
import {SignInContext} from "../Authorization/SignInContext";


function Tweet({avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU"}) {

    const {request} = useRequest()
    const {userId} = useContext(SignInContext)
    const [form, setForm] = useState({
        text: '',
        postedByUser: userId
    })

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const addHandler = async () => {
        try {
            const res = await request('/post', 'POST', {...form})
            window.location.href = "/";
        } catch (e) {

        }
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