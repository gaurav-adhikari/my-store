import React from 'react'
import { RotateLoader } from 'react-spinners'

function LoadingComponent() {
    return (
        <div className='flex justify-center mt-32'>
            <RotateLoader color='gray' size={15}/>
        </div>

    )
}

export default LoadingComponent