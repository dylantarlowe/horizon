import React, {useState} from 'react'

type Props = {}

const Preferences = (props: Props) => {
    const [tripStyle, setTripStyle] = useState("Adventure");
    const [cityLocation, setCityLocation] = useState("Country Side");
    const [cityStyle, setCityStyle] = useState("Historic");
    const [popularity, setPopularity] = useState("Touristy");

    const active = 'border border-solid border-horizon text-horizon';
    const inactive = 'border-none text-gray-400';

  return (
    <div className='sm:px-20 px-6 pt-6 z-10'>
        <p className='text-gray-400 font-semibold text-sm'>Your exploration, your preferences<span className='text-horizon text-lg'>.</span></p>
        <div className='flex sm:flex-row flex-col sm:space-x-3 space-x-0'>
            <div className='flex pt-2'>
                <button className={`${tripStyle === "Adventure" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {setTripStyle("Adventure"); console.log(tripStyle)}}>Adventure</button>
                <button className={`${tripStyle === "Relaxation" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {setTripStyle("Relaxation")}}>Relaxation</button>
            </div>
            {/* ask more */}
            <div className='flex pt-2'>
                <button className={`${cityLocation === "Country Side" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {setCityLocation("Country Side"); console.log(tripStyle)}}>Country Side</button>
                <button className={`${cityLocation === "City" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {setCityLocation("City")}}>City</button>
            </div>    
        </div>  
        <div className='flex sm:flex-row flex-col sm:space-x-3 space-x-0'>
            <div className='flex pt-3'>
                <button className={`${cityStyle === "Historic" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {setCityStyle("Historic"); console.log(tripStyle)}}>Historic</button>
                <button className={`${cityStyle === "Modern" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {setCityStyle("Modern")}}>Modern</button>
            </div>    
            <div className='flex pt-3'>
                <button className={`${popularity === "Touristy" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {setPopularity("Touristy"); console.log(tripStyle)}}>Touristy</button>
                <button className={`${popularity === "Uncommon" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {setPopularity("Uncommon")}}>Uncommon</button>
            </div>    
        </div>

    </div>
    )
}

export default Preferences