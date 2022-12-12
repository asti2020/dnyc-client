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
                        <h3 onClick={e => navigate('/contactus')}>Support</h3>
                        <li onClick={e => navigate('/contactus')}>Help Center</li>
                        <li onClick={e => navigate('/contactus')}>Contact Us</li>
                    </ul>
                </div>
                <div className="footerMid">
                    <ul>
                        <h1 onClick={e => navigate('/')}>DNYCR</h1>
                        <li onClick={e => navigate('/add')}>Rental space ??</li>
                    </ul>
                </div> 
                <div className='footer'>
                    <ul>
                        <li>© 2022 DNYCR.Inc</li>
                    </ul>    
                </div>
            </div>
                {/* <div className='footer'>
                    <ul>
                        <li>© 2022 DNYCR.Inc</li>
                    </ul>    
                </div> */}
        </div>
    </>
  )
}

export default Footer