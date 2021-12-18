import React from 'react';
import {Avatar} from "@material-ui/core";
import './FollowItem.css'
import {Button} from "@mui/material";


export default function FollowItem({avatar, name, username, mark}) {
    return (
        <div className={"followItem"}>
            <Avatar src={avatar}/>

            <div className={"followItem__username"}>
                <p className={"followItem__textWeight"}>{name}</p>
                <p className={"profile__textGray"}>{'@'+username}</p>
            </div>

            <Button className={"followItem_button"}>Follow</Button>
        </div>
    )
}