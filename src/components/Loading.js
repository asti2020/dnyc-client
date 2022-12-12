import React from 'react'
import { Audio } from 'react-loader-spinner'



function Loading(){

    return(
        <>
            <div className='loading'  align='center'>
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        
        </>
    )
}

export default Loading;