import React from 'react'
import {NavLink, Link} from 'react-router-dom';


function NavListing({user}){
    const token = localStorage.getItem('jwt')

    return (
        <>
            <div className='navListhead'>
                <Link to="/"><div className="log"> <h2 className='logo'> DNYCR </h2></div></Link>
                {token ? <NavLink to="/Profile"><button>Profile</button></NavLink> : null}
                {token ? <NavLink to="/Save"><button>Save</button></NavLink> : null}

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
                                <NavLink to="contactUs">
                                    <button>Contact</button>                         
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
