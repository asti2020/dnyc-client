import React from 'react'

function ErrorRoute()
{
    return (
        <div>
            <h1>404 Page Not Found</h1>
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

