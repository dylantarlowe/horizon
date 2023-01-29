import React from 'react'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type Props = {
    activities: any
}


const Activities = (props: Props) => {
    
    // const defaultActivities = [
    //     {
    //         image: "https://d1bv4heaa2n05k.cloudfront.net/user-images/1462444455356/shutterstock-318545543_main_1462444493326.jpeg", 
    //         title: "Sacred Monkey Forest"
    //     },
    //     {
    //         image: "https://www.theungasan.com/wp-content/uploads/2020/01/bali-uluwatu-temple-goibibo.jpg",
    //         title: "Uluwatu Temple",
    //     },
    //     {
    //         image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/44/78/b3/tirta-empul-temple.jpg?w=1600&h=900&s=1/",
    //         title: "Pura Tirta Empal"
    //     }
    // ]

  return (
    <div className='space-y-2'>
        <p className='text-gray-400 font-semibold text-lg'>Popular Activities<span className='text-horizon text-lg'>.</span></p>
        {/* display bunch of small gray boxes that have an image and a title beneath */}
        <div className='flex flex-row space-x-4 overflow-x-scroll mr-12 scrollbar-hidden'>
            {props.activities && Object.entries(props.activities).map((activity : any, index : number)  => (
                <div className='bg-gray-300 w-48 h-42 rounded-lg mb-2'>
                    <div className='w-48 h-28 relative rounded-lg'>
                        <Image className="rounded-t-lg" loader={() => activity[1]} src={activity[1]} fill alt="index"/>
                    </div>
                    <p className='px-1 pt-1'>{activity[0]}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Activities