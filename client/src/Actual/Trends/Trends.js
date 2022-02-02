import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TrendsItem from "./TrendsItem";
import React from "react";

export default function Trends() {
    return (
        <>
            {/*<Search/>*/}
            <div className="actual__widgetContainer">
                <h2>
                    <span>Trends for you</span>
                    <SettingsOutlinedIcon className={"actual__settingsIcon"}/>
                </h2>

                <TrendsItem tag={"тренд1"} trend={"in Russia"} views={"1,366,785 views"}/>
                <TrendsItem tag={"тренд2"} trend={"in Russia"} views={"2,366,785 views"}/>
                <TrendsItem tag={"тренд3"} trend={"in Russia"} views={"3,366,785 views"}/>
                <TrendsItem tag={"тренд4"} trend={"in Russia"} views={"4,366,785 views"}/>

                <p className="actual__showMore">Show more</p>

            </div>
        </>
    )
}
