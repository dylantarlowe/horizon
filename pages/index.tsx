import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Image from 'next/image'
import bannerImage from '@/public/images/bannerImage.png'
import Preferences from '@/components/Preferences'

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header/>
      <Banner/>
      <Preferences />
      <div className='sm:px-20 px-6 pt-6'>
        <button className='bg-horizon text-white sm:w-1/2 w-full text-lg py-2 rounded-lg'>Let's get traveling</button>
      </div>
      <Image className='w-1/2 invisible sm:visible top-0 right-0 fixed z-10' src={bannerImage} alt="bannerImage" />
    </div>
  )
}
