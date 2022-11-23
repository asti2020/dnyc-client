import React from 'react'

function Home(user){
    return (
        <div className="container">
            <div>
                <h1>Welcome to DNYCR {user.first_name}</h1>
            </div>
        </div>
    )
}

export default Home
