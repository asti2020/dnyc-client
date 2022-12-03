
import Rental from './Rental'
import Hero from './Hero'
import { Route, Routes } from 'react-router-dom'
import { useMatch } from 'react-router-dom'
import PreviewPage from './PreviewPage'
import React from 'react'
// import { HomeNav } from './HomeNav'

function Home({ rentals, setSearch, search}){
    // const { url } = useRouteMatch()
    let match = useMatch("/rentals/:id");
    return (
        <div className="container">
            <div className=''>
                {/* <HomeNav /> */}
                <Hero search={search} setSearch={setSearch}/>
                <h1>banner</h1>
                <h1>Search</h1>
                <h1>Save</h1>
                <h1>Filter</h1>
            </div>
            <Rental rentals={rentals}/>
           <React.Fragment>
            <Routes>
                <Route exact path={`${match}/:id`} component={<PreviewPage/>}/>
                </Routes>
            </React.Fragment>
         

        </div>
    )
}

export default Home
