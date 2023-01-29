import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Image from 'next/image'
import bannerImage from '@/public/images/bannerImage.png'
import Preferences from '@/components/Preferences'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Lottie from 'react-lottie';
import loadingLottie from '@/public/images/loadingLottie.json'
import axios from 'axios';

export default function Home() {
  const router = useRouter();
  const [rangeLow, setRangeLow] = useState(1000);
  const [rangeHigh, setRangeHigh] = useState(1500);
  const [duration, setDuration] = useState(14);  
  const [tripStyle, setTripStyle] = useState("Adventure");
  const [cityLocation, setCityLocation] = useState("Nature");
  const [cityStyle, setCityStyle] = useState("Historic");
  const [popularity, setPopularity] = useState("Touristy");
  const [loading, setLoading] = useState(false);
  const [party, setParty] = useState("Food")
  const [temperature, setTemperature] = useState("Warm")
  const [sports, setSports] = useState("Sports")

  function handleExplore() {
    // get all data from preferences
    const preferences = {
      "tripStyle": tripStyle,
      "cityLocation": cityLocation,
      "cityStyle": cityStyle,
      "popularity": popularity,
      "rangeLow": rangeLow.toString(),
      "rangeHigh": rangeHigh.toString(),
      "duration": duration.toString(),
      "temperature": "Hot"
    }


    setLoading(true);

    axios.post('http://localhost:5000/howdy', preferences)
    .then(response => {
      console.log(response);
      localStorage.setItem('preferences', JSON.stringify(preferences));
      localStorage.setItem('tripInfo', JSON.stringify(response.data));
      router.push('/explore');
      setLoading(false);
    })
    .catch(error => {
      console.log(error)
      setLoading(false);
    });

  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="h-screen w-full">
      <Header />
      {loading ? <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
                speed={2}
       /> :
        <>
          <Banner rangeLow={rangeLow} setRangeLow={setRangeLow} rangeHigh={rangeHigh} setRangeHigh={setRangeHigh} duration={duration} setDuration={setDuration} />
          <Preferences tripStyle={tripStyle} cityLocation={cityLocation} cityStyle={cityStyle} popularity={popularity} setCityLocation={setCityLocation} setCityStyle={setCityStyle}  setPopularity={setPopularity} setTripStyle={setTripStyle} party={party} setParty={setParty} temperature={temperature} setTemperature={setTemperature} sports={sports} setSports={setSports} />
          <div className='sm:px-20 px-6 pt-3'>
            <button onClick={() => handleExplore()} className='bg-horizon text-white sm:w-1/2 w-full text-lg py-2 rounded-lg'>Let&apos;s get traveling</button>
          </div>
          <Image className='w-1/2 invisible sm:visible top-0 right-0 fixed z-10' src={bannerImage} alt="bannerImage" />
        </>
        }
    </div>
  )
}
