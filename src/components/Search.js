import React from "react";
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";
function Search({setSearch, search}){
    const jwt_token = localStorage.getItem('jwt');
    const navigate = useNavigate();
    const {id} = useParams();
    const handleClickAdd = () => {
        if (jwt_token) {
            window.location.href = "/add";
        }
        else {
            navigate("/login");
        }
    }
    console.log(jwt_token + "i am jwt");
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
            <button onClick={handleClickAdd}>Sale</button>
        </div>
    )
}

export default Search;
