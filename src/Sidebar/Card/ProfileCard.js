import React from 'react';
import './ProfileCard.css';
import {Avatar} from "@material-ui/core";
import {MoreHorizOutlined} from "@material-ui/icons";

export default function ProfileCard({name = "Dranov",
                                        avatar = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStAx3uW6Gyx9pIyNquyecY-BMLVIZGx_KaDOMzJhcUMY01gviZzd6x8y2QYUOsWEbMLBo&usqp=CAU",
                                        tag ="dranov"}) {
    return (
        <div className={"card"}>

            <div className={"card__content"}>
                <Avatar src={avatar}/>
                <div className={"card__user"}>
                    <p className={"followItem__textWeight"}>{name}</p>
                    <p className={"profile__textGray"}>{"@" + tag}</p>

                </div>
                <MoreHorizOutlined className={"explore__moreIcon"}/>
            </div>
        </div>
    )
}