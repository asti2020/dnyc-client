import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventCalender from './EventCalender';
import Booking from './Booking';

function PreviewPage () {
    const [preview, setPreview] = useState({});
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:3000/rentals/${id}`)
        .then((res) => res.json())
        .then((data) => setPreview(data))
    }, []);
    console.log(preview)
    return (
        <>
            <div className='preview'>
                <h3>Preview your product!!</h3>
                <div className="containerPrev">
                    <div className="row">
                        <div className="col-12, rentprev">
                            <h3>{preview.title} - {preview.features}</h3>
                            <h5>  {"4.7"} *  Review</h5>
                            <h5>Famous area:{preview.location}</h5>
                        </div>
                    </div>
                <div className="containerPrev">
                    <img src={preview.image} alt={preview.title} />
                    <div className='rentprev'>
                        <h4> {preview.category} hosted by {}</h4>
                        <p>Best for : {preview.Best_for} </p>
                    </div>

                </div> 
            </div>
            <div>
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
                <h3 className='rentprev'>Calendy avilable</h3>
                    <div className='bokkit'>
                        <div className='calendy'>
                            <EventCalender />
                        </div>
                        <div className='booking'>
                            <h3>Wann a Book??</h3> 
                            <Booking />
                        </div>
                    </div>
                    <div className='map'>
                        <h3>Map:Where you will be</h3>
                    </div>
                    <div className='booking'>
                        <h3>Reviews</h3> 
                    </div>
                    <div className='calendy'>
                        <h3> Contact Host</h3>
                    </div>
                </div>
            </div>
    </>
    )
}
export default PreviewPage;