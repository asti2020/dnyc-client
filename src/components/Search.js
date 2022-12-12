import React from "react";
import {useNavigate} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
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
        <>
            {/* <div className="search">
            <div className="search__input"> */}
        <div >
            <div className="scInp">
                <input
                    type="text"
                    placeholder= "Search"
                    value={search}
                    className="searchinput"
                    onChange={(e) => setSearch(e.target.value)}
                    // style={{
                    //     width: "100%",
                    //     backgroundImage: `url(${"https://img.icons8.com/ios/50/000000/search--v1.png"})`,
                    //     backgroundPosition: "10px 10px",
                    //     backgroundRepeat: "no-repeat",
                    //     padding: "12px 20px 12px 40px",
                        
                    // }}
                />
                
            </div>

            {/* <div className="addRental">
                <button  className='addButt' onClick={handleClickAdd}><AiOutlineAppstoreAdd /></button>
            </div> */}
            {/* <div className="filtreRadioButton">
                <div className="filtre">
                    <div className="filtre__input">
                        <label className="filtre__input__label">Apartment
                            <input type="radio" id="all" name="filtre" value="Room" />
                            <span className="checkmark" />
                        </label>
                        <label className="filtre__input__label">House
                            <input className="filtre_input" type="radio" id="food" name="filtre" value="Apartment" />
                            <span className="checkmark" />
                        </label>
                        <label className="filtre__input__label">Studio
                            <input className="filtre_input" type="radio" id="food" name="filtre" value="Kitchen" />
                            <span className="checkmark" />
                        </label>
                        <label className="filtre__input__label">Bedroom
                            <input className="filtre_input" type="radio" id="food" name="filtre" value="Bedroom" />
                            <span className="checkmark" />
                        </label>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="addRental">
                <button  className='addButt' onClick={handleClickAdd}><AiOutlineAppstoreAdd /></button>
            </div>
        </>
    )
}

export default Search;
