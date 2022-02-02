import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Actual.css";


function Search() {
    return (
        <div className="actual__input">
            <SearchIcon  className="actual__searchIcon"/>
            <input placeholder="Search Twitter"
                   type="text"
                   name={"search"}/>
        </div>
    );
}

export default Search;