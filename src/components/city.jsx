import React from 'react'

const City = (props) => {
    const { id, city } = props
    return (
        <div className='bg-slate-700 m-3 p-4 rounded-lg '>
            <h1 className='tracking-widest text-white font-mono font-semibold ' >
                {city}
            </h1>
        </div>
    )
}

export default City