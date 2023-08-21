import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div>
        <input type="search" 
        placeholder="Search Robots"
        className="pa3 ba br4"
        onChange={searchChange}
        ></input>
        </div>
    )
}

export default SearchBox