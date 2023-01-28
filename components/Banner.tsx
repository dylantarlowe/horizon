import React from 'react'

type Props = {}

const Banner = (props: Props) => {
  return (
    
    <div className='sm:px-20 px-6 pt-20'>
        <div>
            <p className='text-gray-400 font-semibold text-sm'>SEEK THE UNKNOWN</p>
            <p className='mt-2 font-bold text-5xl'>Find your trip<span className='text-horizon'>.</span></p>
        </div>
        <div className='pt-6'>
            <div className='px-6 pt-2 bg-gray-300 h-16 w-56 rounded-lg'>
                <p className='text-gray-400 text-sm'>Price Range</p>

            </div>
        </div>


    </div>
  )
}

export default Banner
