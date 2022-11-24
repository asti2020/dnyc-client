
import Rental from './Rental'
import { HomeNav } from './HomeNav'

function Home({ rentals}){
    return (
        <div className="container">
            <div>
                <HomeNav />
                <h1>banner</h1>
            </div>
            <Rental rentals={rentals}/>
        </div>
    )
}

export default Home
