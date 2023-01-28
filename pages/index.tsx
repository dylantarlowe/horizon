import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Image from 'next/image'
import bannerImage from '@/public/images/bannerImage.png'

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Header/>
      <Banner/>
      <Image className='w-1/2 top-0 right-0 fixed' src={bannerImage} alt="bannerImage" />
    </div>
  )
}
