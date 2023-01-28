import React from 'react'
import Image from 'next/image'
import horizonLogo from '../public/images/horizonLogo.jpg'
type Props = {}


const Header = (props: Props) => {
  return (
    <div className='px-20 pt-10 flex space-x-4 items-center'>
        <Image className='rounded-full' src={horizonLogo} width={30} height={30} alt="HorizonLogo" />
        <p className='font-bold text-lg'>Horizon<span className='text-horizon'>.</span></p>
    </div>
  )
}

export default Header