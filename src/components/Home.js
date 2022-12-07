
import Rental from './Rental'
import Hero from './Hero'
import React from 'react'
import { useState } from 'react'
import Map from './Map'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { IoListCircle } from 'react-icons/io5'


function Home({ rentals, setSearch, search}){
    const[wantMap, setWantMap] = useState(true)


    const handleMap = () => {
        setWantMap(!wantMap)
    }  
    return (
        <div className="container">
            <div className=''>
                    <Hero search={search} setSearch={setSearch}/>
            </div>
            <button className='viewButton' onClick={handleMap}> { wantMap ? < IoListCircle/> :<GiEarthAfricaEurope />}</button>
            { wantMap ? <Rental rentals={rentals}/> : <Map rentals={rentals}/> }
        </div>
    )
}

export default Home
