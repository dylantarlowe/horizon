import React, { useEffect, useState } from 'react'
import { IoAirplaneSharp } from 'react-icons/io5'
import { RiHotelFill, RiWalkFill } from 'react-icons/ri'
import { MdFastfood } from 'react-icons/md'
import router, { useRouter } from 'next/router'


type Props = {
    preferences: any,
    info: any
}

const CostBreakdown = (props: Props) => {
    const router = useRouter();
    const [totalPrice, setTotalPrice] = useState(0);
    const [mealPrice, setMealPrice] = useState(0);
    const [activityPrice, setActivityPrice] = useState(0);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        var meal = Math.round(8 / props.info.currency_value);
        var activity = Math.round(40 / props.info.currency_value);
        setTotalPrice((props.preferences.duration * props.info.hotelPrice / 4) + props.info.flightPrice + (meal * props.preferences.duration * 3) + (activity * Math.floor(props.preferences.duration * 3/4)));
        setMealPrice(meal);
        setActivityPrice(activity);
        setLoading(false)
    }, [loading])


  return (
    <div className='w-1/3 fixed right-8 bg-gray-300 h-[80vh] rounded-lg px-10 pt-8 space-y-4'>
        <div className='flex justify-between'>
            <p className='text-horizon font-bold text-lg'>${totalPrice}</p>
            <p className='text-gray-400 text-base'>{props.preferences.duration} days</p>
        </div>
        <p className='font-bold text-gray-400'>Your Price Breakdown</p>
        <div className='flex justify-between'>
            {/* insert flight icon */}
            <div className='flex space-x-2 items-center'>
                <IoAirplaneSharp style={{color: "#A0A7B3"}} />
                <p className='text-gray-400 font-bold text-sm'>FLIGHT</p>
            </div>
            <p className='text-gray-400 text-base font-thin'>${props.info.flightPrice}</p>
        </div>
        <div className='flex justify-between'>
            <div>
                <div className='flex space-x-2 items-center'>
                    <RiHotelFill style={{color: "#A0A7B3"}} />
                    <p className='text-gray-400 font-bold text-sm'>LODGING</p>
                </div>                
                <p className='pl-8 text-gray-400 text-sm'>${props.info.hotelPrice / 4} per night</p>
            </div>
            <p className='text-gray-400 text-base font-thin self-end'>${props.info.hotelPrice * props.preferences.duration / 4}</p>
        </div>
        <div className='flex justify-between'>
            <div>
                <div className='flex space-x-2 items-center'>
                    <MdFastfood style={{color: "#A0A7B3"}}  />
                    <p className='text-gray-400 font-bold text-sm'>FOOD</p>
                </div>                     
                <p className='pl-8 text-gray-400 text-sm'>3 meals per day at ${mealPrice} each</p>
            </div>
            <p className='text-gray-400 text-base font-thin self-end'>${mealPrice * props.preferences.duration * 3}</p>
        </div>
        <div className='flex justify-between'>
            <div>
                <div className='flex space-x-2 items-center'>
                    <RiWalkFill style={{color: "#A0A7B3"}} />
                    <p className='text-gray-400 font-bold text-sm'>ACTIVITIES</p>
                </div>                                     
                <p className='pl-8 text-gray-400 text-sm'>{Math.floor(props.preferences.duration * 3/4)} activities at ${activityPrice}</p>
            </div>
            <p className='text-gray-400 text-base font-thin self-end'>${activityPrice * Math.floor(props.preferences.duration * 3/4)}</p>
        </div>
        {/* line across */}
        <div className='border-b border-gray-400'></div>
        <div className='flex justify-between'>
            <p className='text-gray-400 font-bold text-sm'>TOTAL</p>
            <p className='text-gray-400 text-base font-thin'>${totalPrice}</p>
        </div>
        {/* two buttons. One try new location other is lets get booking */}
        <div className='flex space-x-2 pt-2'>
            <button onClick={() => router.push("/")} className='bg-white text-horizon font-semibold text-sm py-2 px-4 rounded-lg w-1/2'>Try a new location</button>
            <button className='bg-horizon text-white font-semibold text-sm py-2 px-4 rounded-lg w-1/2'>Let&apos;s get booking</button>

        </div>
    </div>  
)
}

export default CostBreakdown