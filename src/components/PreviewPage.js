import { useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
// import CalenderEve from './CalenderEve';
import Booking from './Booking';
import { MdOutlineWifiCalling } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';

// import ContactHost from './Contact';
// import Map from './Map';
// import { SiApachecassandra } from 'react-icons/si'

function PreviewPage ({rentals}) {

    const params = useParams();
    console.log(params  + 'params')
    console.log(rentals[params.rentalID] + "rentals params")
    const { id } = useParams();
    // console.log(rentals + "i am rental id")
    const [preview, setPreview] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3000/rentals/${id}`)
        .then((res) => res.json())
        .then((data) => setPreview(data))
    }, []);
    console.log(preview)
    console.log(preview.user_id+ "i am user id")
    return (
        <>
            <div className='preview'>
                <h3> {preview.address}</h3>
                <div className="containerPrev">
                    <div className="bookit">
                        <div className='containerPrev'>
                        <div className="row">
                            <div className="col-12, rentprev">
                                <h3>{preview.title} </h3>
                                <h5>  {"4.7"} *  Review</h5>
                                <h5>Famous area:{preview.location}</h5>
                            </div>
                        </div>
                            <img className='previewImage' src={preview.image} alt={preview.title} />
                            <div className='rentprev'>
                                <h4> {preview.category} hosted by { }</h4>
                                <p> Host Say : {preview.description} </p>
                            </div>
                        </div>
                        <div className='booking'>
                                <h3>Request Reserve!!</h3> 
                                <Booking  rental={rentals}/>
                            </div>
                    </div> 
            </div>
            <div className='plcall'>
                <h3 className='rentprev'>What this place offers!!</h3>
                <div className='placeOffers'>
                        <label className='prevp'>${preview.price}/M</label> 
                        <label className='prevp'>{preview.area_sqft} /sqft</label>
                        <label className='prevp'>{preview.starting_date}</label>
                        <label className='prevp'>{preview.parking}</label>
                        <label className='prevp'>{preview.utility}</label>
                        <label className='prevp'>{preview.features}</label> 
                </div>
            </div>
                <div>
                    <div className='bokkit'>
                    </div>
                    <div className='cocH'>
                            <h3>Contact Host</h3> 
                            {/* <h4 className='contact'> <HiOutlineMail />{preview.email}</h4> */}
                            
                            <h4 className='contact'> <MdOutlineWifiCalling />{preview.phone}</h4>
                    </div>
                    {/* <div className='calendy'>
                        <h3> Review</h3>
                    </div> */}
                </div>
            </div>
    </>
    )
}
export default PreviewPage;