import React from 'react'
import {useNavigate} from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
  return (
    <>
        <div className='myFoot'>
            <div className="footerContainer">
                <div className="footerRight">
                    <ul>
                        <h3 onClick={e => navigate('/contacuUs')}>Support</h3>
                        <li onClick={e => navigate('/contacuUs')}>Help Center</li>
                        <li>Cancelation Option</li>
                        <li> COVID'19 Responce</li>
                        <li onClick={e => navigate('/contacuUs')}>Report Naberhood concern</li>
                    </ul>
                </div>
                <div className="footerMid">
                    <ul>
                            <h2>DNYCR</h2>
                            <li>Rental space ??</li>
                    </ul>
                </div>
                <div className="footerLeft">
                        <ul>
                            <h3>Discover</h3>
                            <li onClick={e => navigate('/contacuUs')}>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                        </ul>
                </div>
            </div>
                <div className='footer'>
                    <ul>
                        <li>© 2022 DNYCR.Inc</li>
                        <li>
                            <a href="https://www.linkedin.com/in/daniel-nyamache-9b1b1b1b9/">   <i className="fab fa-linkedin"></i></a>
                            <a href="https://facebook.com/daniel-nyamache-9b1b1b1b9/">   <i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/daniel_nyamache_9b1b1b1b9/">   <i className="fab fa-twitter"></i></a>
                        </li>
                    </ul>    
                </div>
        </div>
    </>
  )
}

export default Footer