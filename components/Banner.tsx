import React, { useState, useRef, useEffect } from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

type Props = {
    rangeLow: number,
    rangeHigh: number,
    duration: number,
    setRangeHigh: (value: number) => void,
    setRangeLow: (value: number) => void,
    setDuration: (value: number) => void,
}

const Banner = (props: Props) => {


    function onPriceChange() {
        // get prices from range slider
        var low = Number(document.getElementById("range-slider-yellow")?.children[2].getAttribute("aria-valuenow"));
        var high = Number(document.getElementById("range-slider-yellow")?.children[3].getAttribute("aria-valuenow"));
        props.setRangeLow(Math.min(low, high));
        props.setRangeHigh(Math.max(low, high));
    }


  return (
    
    <div className='sm:px-20 px-6 pt-14 z-10'>
        <div>
            <p className='text-gray-400 font-semibold text-sm'>SEEK THE UNKNOWN</p>
            <p className='mt-2 font-bold text-5xl'>Find your trip<span className='text-horizon'>.</span></p>
        </div>
        <div className='pt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 space-x-0 '>
            <div className='px-6 pt-2 bg-gray-300 h-24 w-56 rounded-lg'>
                <p className='text-gray-400 text-sm'>Price Range</p>
                <div className="p-4 flex flex-col items-center justify-center">
                    <RangeSlider id="range-slider-yellow" onInput={onPriceChange} min={500} max={3000} step={50} defaultValue={[1000,1500]} />
                    <p className='pt-3 text-sm text-gray-400'><span className='text-horizon text-lg'>${props.rangeLow}</span> to <span className='text-horizon text-lg'>${props.rangeHigh}</span></p> 
                </div>
            </div>
            {/* create duration input with plus and minus for days */}
            <div className='px-6 pt-2 bg-gray-300 h-24 w-56 rounded-lg flex-col'>
                <p className='text-gray-400 text-sm h-6'>Duration</p>
                <div className='flex justify-center h-14 items-center space-x-1'>
                    <button className='text-2xl text-horizon w-8 h-8 rounded-full' onClick={() => {
                        props.setDuration(props.duration-1);
                        if (props.duration <= 1) {
                            props.setDuration(1);
                        };
                    }}>&ndash;</button>
                    <p className='text-lg'> {props.duration} days </p>
                    <button className='text-horizon text-2xl w-8 h-8 rounded-full' onClick={() => props.setDuration(props.duration+1)}>+</button>

                </div>
            </div>    
        </div>

    </div>
  )
}

export default Banner
