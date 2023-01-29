import React, {useEffect, useState} from 'react'
import Header from '@/components/Header'

import Activities from '@/components/Activities';
import Eateries from '@/components/Eateries';
import CostBreakdown from '@/components/CostBreakdown';


type Props = {}

const Explore = (props: Props) => {
    const [info, setInfo] = useState<any | null>(null);
    const [preferences, setPreferences] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);
    const [activities, setActivities] = useState<any | null>(null);
    const [flight, setFlight] = useState<number | null>(null);
    const [hotel, setHotel] = useState<number | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const [yelpInfo, setYelpInfo] = useState<any | null>(null);
    const [location, setLocation] = useState();

    const currency_value = 1.45;
 
    useEffect(() => {
        const tripInfo = JSON.parse(localStorage.getItem('tripInfo')!)
        const preferences= JSON.parse(localStorage.getItem('preferences')!)
        setInfo(tripInfo);
        setPreferences(preferences);
        setActivities(tripInfo.attractions)
        setFlight(tripInfo.average_cost_flight)
        setHotel(tripInfo.average_cost_hotel)
        setDuration(preferences.duration)
        setYelpInfo(tripInfo.yelp)
        setLocation(tripInfo.city)

        setLoading(false);
        console.log(info)
    }, [loading])

    return (
        <div className="h-screen w-full">
            <Header/> 
            <div className='sm:px-20 px-6 pt-4 flex'>
                <div className='w-2/3 space-y-4 '>
                    <div>
                        <p className='mt-2 font-bold text-5xl'>Let&apos;s Discover</p>
                        <p  className='mt-2 font-thin text-5xl'>{location}<span className='text-horizon'>.</span></p>
                    </div>
                    <Activities activities={activities} />
                    <Eateries yelpInfo={yelpInfo} />
                </div>
                <CostBreakdown info={{hotelPrice: hotel, flightPrice: flight, currency_value: 1.45}} preferences={{duration: duration}} />
            </div>
            
        </div>
    );
}

export default Explore