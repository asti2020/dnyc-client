import React from 'react'
import Search from './Search'

function Hero({setSearch, search}) {
  return (
    <>
        <div>
            <div className="search-container">
                <div className="search-icon">
                    <Search search={search} setSearch={setSearch}/>
                    <button>Add Rentals</button>
                    </div>
            </div>

        </div>
    </>
  )
}

export default Hero