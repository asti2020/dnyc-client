
import Rental from './Rental'
import Hero from './Hero'
import React from 'react'
// import { HomeNav } from './HomeNav'

function Home({ rentals, setSearch, search}){
    return (
        <div className="container">
            <div className=''>
                {/* <HomeNav /> */}
                <Hero search={search} setSearch={setSearch}/>
            </div>
            <div className="rental-list">
                <Rental rentals={rentals}/>
        </div>
        </div>
    )
}

export default Home
