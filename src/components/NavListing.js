import React from 'react'
import { Link} from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import {FiHeart} from 'react-icons/fi'
import { SiMinutemailer } from "react-icons/si";
// import { AiOutlineHome } from "react-icons/ai";
import {GoSignOut} from 'react-icons/go'
import { SlLogin } from "react-icons/sl";
import { MdFollowTheSigns } from "react-icons/md";

function NavListing({user}){
    const token = localStorage.getItem('jwt')

    const handleLogOut = () => {
        localStorage.removeItem('jwt')
        window.location.replace('/login')
        // navigate('/login')
    }
    return (
        <>
            <div className='navListhead'>
                {/* <Link to="/"><div className="log"> <h2 className='logo'> DNYCR </h2></div></Link> */}
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
                                        <button className='fontNav'>< CgProfile/></button>
                                    </Link>
                                : null 
                                }
                            </li> 
                           <li>
                            { token ? 
                                <Link to="Save">
                                    <button className='fontNav' >< FiHeart/></button>                          
                                </Link> : <button> <  FiHeart/> </button>  }
                            </li>
                            <li>
                                <Link to="contactUs">
                                    <button className='fontNav' >< SiMinutemailer/></button>                         
                                </Link>
                            </li>
                            <li>  
                                { token ? null :
                                <Link to="login">
                                    <button className='fontNav' ><SlLogin/></button>                          
                                </Link>
}
                            </li>
                            <li>
                            {
                            token ? <button className='fontNav' onClick={handleLogOut}><GoSignOut/></button> : <Link to="up">
                            <button className='fontNav' > < MdFollowTheSigns/></button>
                        </Link>
                            }
                            </li>
                        </ul>
                    </nav>
            </div>
    
        </>

    );
}

export default NavListing;
