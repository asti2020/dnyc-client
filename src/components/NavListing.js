import React from 'react'
import { Link} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import {FiHeart} from 'react-icons/fi'
import { SiMinutemailer } from "react-icons/si";
import { SlLogin } from "react-icons/sl";

function NavListing({user}){
    const token = localStorage.getItem('jwt')
    return (
        <>
            <div className='navListhead'>
                <Link to="/"><div className="log"> <h2 className='logo'> DNYCR </h2></div></Link>
                    <nav>
                        <ul className='nabBar'>
                            <li>
                                <Link to="/" className="log">
                                    <div className="log"> <h2 className='logo'> DNYCR </h2
                                    ></div>
                                </Link>
                            </li>
                            <li>
                                {
                                token ?
                                    <Link to="Profile" >
                                        <button>< CgProfile/></button>
                                    </Link>
                                        : 
                                    <Link to="up">
                                        <button> Signup</button>
                                    </Link>  
                                }
                            </li> 
                            <li>
                                <Link to="Save">
                                    <button>< FiHeart/></button>                          
                                </Link>
                            </li>
                            <li>
                                <Link to="contactUs">
                                    <button>< SiMinutemailer/></button>                         
                                </Link>
                            </li>
                            <li>
                                <Link to="login">
                                    <button><SlLogin/></button>                          
                                </Link>
                            </li>
                            <li>
                            {
                            token ? <Link to="/logout"><button>Out</button></Link> : null
                            }
                            </li>
                        </ul>
                    </nav>
            </div>
    
        </>

    );
}

export default NavListing;
