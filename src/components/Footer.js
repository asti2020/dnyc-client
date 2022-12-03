import React from 'react'

function Footer() {
  return (
    <>
        <div className='myFoot'>
            <div className="footerContainer">
                <div className="footerRight">
                    <ul>
                        <h3>Support</h3>
                        <li>Help Center</li>
                        <li>AirCover</li>
                        <li>Cancelation Option</li>
                        <li> COVID'19 Responce</li>
                        <li>Report Naberhood concern</li>
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
                            <li>Contact</li>
                            <li>About</li>
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