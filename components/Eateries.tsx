import React from 'react'
import Image from 'next/image'

type Props = {
    yelpInfo: any
}


const Eateries = (props: Props) => {
    
    const defaultYelpInfo = {
        "restaurant1": {
        "name": "Gambino",
        "price": "\u20ac\u20ac",
        "rating": 4.5,
        "num_reviews": 223,
        "picture": "https://s3-media4.fl.yelpcdn.com/bphoto/xe-2OldoYi81yAu2X3rR0g/o.jpg"
        },
        "restaurant2": {
        "name": "Pastamore",
        "rating": 4.5,
        "num_reviews": 13,
        "picture": "https://s3-media2.fl.yelpcdn.com/bphoto/m6UVWU8cPlkrWvwktT-lXg/o.jpg"
        },
        "restaurant3": {
        "name": "East Mamma",
        "price": "\u20ac\u20ac",
        "rating": 4.5,
        "num_reviews": 252,
        "picture": "https://s3-media3.fl.yelpcdn.com/bphoto/kNSGQpJ1i6BNB9B3G0Bh5w/o.jpg"
        },
        "restaurant4": {
        "name": "Pink Mamma",
        "price": "\u20ac\u20ac",
        "rating": 4.0,
        "num_reviews": 272,
        "picture": "https://s3-media1.fl.yelpcdn.com/bphoto/okfnivvKXKSDrtY4qUqoWg/o.jpg"
        },
        "restaurant5": {
        "name": "Ober Mamma",
        "price": "\u20ac\u20ac",
        "rating": 4.5,
        "num_reviews": 289,
        "picture": "https://s3-media3.fl.yelpcdn.com/bphoto/W_QFGV2B3lBFgPagF7O7-w/o.jpg"
        },
    }

  return (
    <div className='space-y-2 pb-10' >
        <p className='text-gray-400 font-semibold text-lg'>Popular Eateries<span className='text-horizon text-lg'>.</span></p>
        {/* display bunch of small gray boxes that have an image and a title beneath */}
        <div className='flex flex-row space-x-4 overflow-x-scroll mr-12 scrollbar-hidden'>
            {props.yelpInfo ? Object.values(props.yelpInfo).map((restaurant : any, index : number)  => (
                <div className='bg-gray-300 w-48 h-43 rounded-lg mb-2'>
                    <div className='w-48 h-28 relative rounded-lg'>
                        <Image className="rounded-t-lg" loader={() => restaurant.picture} src={restaurant.picture} fill alt="index"/>
                    </div>
                    <div className='flex justify-between'>
                        <p className='px-2 pt-1'>{restaurant.name}</p>
                        <p className='px-2 pt-1 text-gray-400'>{restaurant.price}</p>
                    </div>
                    <p className='text-sm text-gray-400 px-2 pb-2'>{restaurant.rating} stars <span className='font-thin'>({restaurant.num_reviews})</span></p>

                </div>
            )) :
            Object.values(defaultYelpInfo).map((restaurant : any, index : number)  => (
                <div className='bg-gray-300 w-48 h-43 rounded-lg mb-2'>
                    <div className='w-48 h-28 relative rounded-lg'>
                        <Image className="rounded-t-lg" loader={() => restaurant.picture} src={restaurant.picture} fill alt="index"/>
                    </div>
                    <div className='flex justify-between'>
                        <p className='px-2 pt-1'>{restaurant.name}</p>
                        <p className='px-2 pt-1 text-gray-400'>{restaurant.price}</p>
                    </div>
                    <p className='text-sm text-gray-400 px-2 pb-2'>{restaurant.rating} stars <span className='font-thin'>({restaurant.num_reviews})</span></p>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Eateries