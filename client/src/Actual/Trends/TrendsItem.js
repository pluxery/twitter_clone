import React from "react";
import "./TrendsItem.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function TrendsItem({tag, trend, views}) {
    return (
        <div className={"trendsItem"}>
            <p className={"trendsItem__thinText"}>
                {trend}
                <MoreHorizIcon className={"trendsItem__moreIcon"}/>
            </p>

            <p className={"trendsItem__tag"}>#{tag}</p>
            <p className={"trendsItem__thinText"}>{views}</p>
        </div>
    );
}

export default TrendsItem;