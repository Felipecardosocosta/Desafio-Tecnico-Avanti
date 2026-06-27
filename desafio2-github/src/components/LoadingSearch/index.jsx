import React from 'react'
import { RingLoader } from "react-spinners"

const LoadingSearch = () => {
    return (
        <div className='flex flex-col items-center justify-center h-70'>
            <RingLoader size={60} color='#005CFF'
            />


        </div>
    )
}

export default LoadingSearch
