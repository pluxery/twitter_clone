import React from "react";
import "./Actual.css";

import FollowWindow from "./FollowWidget/FollowWindow";
import Trends from "./Trends/Trends";

function Actual({trendsOn}) {
    return (
        <div className="actual">

            {trendsOn && <Trends/>}
            <FollowWindow/>

            <div className={"actual__footer"}>
                <p>Terms of Service
                    Privacy Policy
                    Cookie Policy
                    Ads info
                    More
                    © 2021 Twitter, Inc.</p>
            </div>
        </div>
    );
}

export default Actual;