import React from "react";

function Search({setSearch, search}){
    // console.log(search)
    return (
        <div className="search">
            <div className="search__input">
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    className="searchinput"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <i className="search__input__icon search__input__icon--search" />
            </div>
        </div>
    )
}

export default Search;
