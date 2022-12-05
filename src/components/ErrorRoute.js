import React from 'react'

function ErrorRoute()
{
    return (
        <div className='error'>
            <h1>No matching page!!</h1>
            <p>The page you are looking for could not be found.</p>
            <p>
                <a href="/" className="btn btn-primary">
                    Go Home
                </a>
            </p>
        </div>
    )
}

export default ErrorRoute

