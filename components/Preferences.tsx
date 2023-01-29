import React, {useState} from 'react'

type Props = {
    tripStyle: string,
    cityLocation: string,
    cityStyle: string,
    popularity: string,
    party: string,
    temperature: string,
    sports: string,
    setTripStyle: any, 
    setCityLocation: any,
    setCityStyle: any,
    setPopularity: any,
    setParty: any,
    setTemperature: any,
    setSports: any,

}

const Preferences = (props: Props) => {

    const active = 'border border-solid border-horizon text-horizon';
    const inactive = 'border-none text-gray-400';

  return (
    <div className='sm:px-20 px-6 pt-4 z-10'>
        <p className='text-gray-400 font-semibold text-sm'>Your exploration, your preferences<span className='text-horizon text-lg'>.</span></p>
        <div className='flex sm:flex-row flex-col sm:space-x-3 space-x-0'>
            <div className='flex pt-2'>
                <button className={`${props.tripStyle === "Adventure" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {props.setTripStyle("Adventure")}}>Adventure</button>
                <button className={`${props.tripStyle === "Relaxation" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {props.setTripStyle("Relaxation")}}>Relaxation</button>
            </div>
            {/* ask more */}
            <div className='flex pt-2'>
                <button className={`${props.cityLocation === "Nature" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {props.setCityLocation("Nature")}}>Nature</button>
                <button className={`${props.cityLocation === "City" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {props.setCityLocation("City")}}>City</button>
            </div>    
        </div>  
        <div className='flex sm:flex-row flex-col sm:space-x-3 space-x-0'>
            <div className='flex pt-3'>
                <button className={`${props.cityStyle === "Historic" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {props.setCityStyle("Historic")}}>Historic</button>
                <button className={`${props.cityStyle === "Modern" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {props.setCityStyle("Modern")}}>Modern</button>
            </div>    
            <div className='flex pt-3'>
                <button className={`${props.popularity === "Touristy" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {props.setPopularity("Touristy")}}>Touristy</button>
                <button className={`${props.popularity === "Uncommon" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {props.setPopularity("Uncommon")}}>Uncommon</button>
            </div>    
        </div>
        <div className='flex sm:flex-row flex-col sm:space-x-3 space-x-0'>
            <div className='flex pt-3'>
                <button className={`${props.temperature === "Warm" ? active : inactive } bg-gray-300 px-6 py-2 rounded-l-lg`}
                onClick={() => {props.setTemperature("Warm")}}>Warm</button>
                <button className={`${props.temperature === "Chilly" ? active : inactive } bg-gray-300 px-6 py-2 rounded-r-lg`}
                onClick={() => {props.setTemperature("Chilly")}}>Chilly</button>
            </div>    
            <div className='flex pt-2'>
                <button className={`${props.party === "Food" ? active : inactive } bg-gray-300 px-4 py-2 rounded-l-lg`}
                onClick={() => {props.setParty("Food")}}>Food</button>
                <button className={`${props.party === "Party" ? active : inactive } bg-gray-300 px-4 py-2 rounded-r-lg`}
                onClick={() => {props.setParty("Party")}}>Party</button>
            </div>    
            <div className='flex pt-2'>
                <button className={`${props.sports === "Sports" ? active : inactive } bg-gray-300 px-4 py-2 rounded-l-lg`}
                onClick={() => {props.setSports("Sports")}}>Sports</button>
                <button className={`${props.sports === "Music" ? active : inactive } bg-gray-300 px-4 py-2 rounded-r-lg`}
                onClick={() => {props.setSports("Music")}}>Music</button>
            </div>  
        </div>

    </div>
    )
}

export default Preferences