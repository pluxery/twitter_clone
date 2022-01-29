import React from 'react'
import "./SidebaItem.css"

function SidebarItem({text, Icon}) {
    return (
        <span className={"sidebarItem"}>
            <Icon/>
            <h2>{text}</h2>
        </span>
    )
}

export default SidebarItem;