import React from 'react'
import {NavLink} from 'react-router-dom';


function NavListing(){
    return (
        <>
            <div className='navListhead'>
                <NavLink to="/"><div className="log"> <h2 className='logo'> DNYCR </h2></div></NavLink>
                    <nav>
                        <ul className='nabBar'>

                            <li>
                                <NavLink to="/" className="log">
                                    <div className="log"> <h2 className='logo'> DNYCR </h2
                                    ></div>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="Profile" >
                                    <button>Profile</button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="Save">
                                    <button>Save</button>                          
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
