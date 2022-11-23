import React from 'react'
import {NavLink} from 'react-router-dom';


function NavListing(){
    return (
        <>
            <div className='navListhead'>
                <NavLink to="/"><div className="logo"> <img src="" alt="logo" /></div></NavLink>
                    <nav>
                        <ul className='nabBar'>
                            <li>
                                <NavLink to="Home" >
                                    <button>Home</button>                          
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="Profile" >
                                    <button>Profile</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="Services">
                                    <button>Services</button>                          
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="About">
                                    <button>About</button>                         
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="login">
                                    <button>In</button>                          
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
            </div>
    
        </>
    );
}

export default NavListing;
