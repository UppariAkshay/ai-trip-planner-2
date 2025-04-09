import React from 'react'
import image from '../../assets/travelImage/travelImage.jpg'
import imagePlaceholder from '../../assets/image-placeholder/image-placeholder.webp'
import imagePlaceholderColor from '../../assets/image-placeholder/image-placeholder-color.jpg'

function PlacesToVisit({trip}) {
  return (
    <div className='mt-15'>
        <h1 className='text-left text-[30px] font-bold mb-5'>Places to visit</h1>
        <ul className=''>
            {trip?.tripData?.placesSuggestionsList.map(each => <li>
                <p className='text-left text-[20px] mb-5 rounded-xl p-3 bg-black text-white w-fit'>Day {each.day}</p>
                <div className='grid grid-cols-3 gap-5 mb-10'>
                    <div className='text-left'>
                      <p className='text-lg text-center mb-10 bg-green-400 text-white rounded-xl w-fit p-3'>Morning</p>
                      <img src={imagePlaceholderColor} className='h-[300px]' />
                      <p><span className='font-bold'>🖼️ Place Name: </span>{each.morning.placeName}</p>
                      <p><span className='font-bold'>⌚ Available Timings: </span>{each.morning.availableTiming}</p>
                      <p><span className='font-bold'>💸 Ticket Price: </span>{each.morning.ticketPrice}</p>
                      <p><span className='font-bold'>⭐ Rating: </span>{each.morning.rating}</p>
                      <p><span className='font-bold'>🚌 Travel time: </span>{each.morning.traveltime}</p>
                    </div>
                    <div className='text-left'>
                      <p className='text-lg text-center mb-10 bg-green-400 text-white rounded-xl w-fit p-3'>Afternoon</p>
                      <img src={imagePlaceholderColor} className='h-[300px]' />
                      <p><span className='font-bold'>🖼️ Place Name: </span>{each.afternoon.placeName}</p>
                      <p><span className='font-bold'>⌚ Available Timings: </span>{each.afternoon.availableTiming}</p>
                      <p><span className='font-bold'>💸 Ticket Price: </span>{each.afternoon.ticketPrice}</p>
                      <p><span className='font-bold'>⭐ Rating: </span>{each.afternoon.rating}</p>
                      <p><span className='font-bold'>🚌 Travel time: </span>{each.afternoon.traveltime}</p>
                    </div>
                    <div className='text-left'>
                      <p className='text-lg text-center mb-10 bg-green-400 text-white rounded-xl w-fit p-3'>Evening</p>
                      <img src={imagePlaceholderColor} className='h-[300px]' />
                      <p><span className='font-bold'>🖼️ Place Name: </span>{each.evening.placeName}</p>
                      <p><span className='font-bold'>⌚ Available Timings: </span>{each.evening.availableTiming}</p>
                      <p><span className='font-bold'>💸 Ticket Price: </span>{each.evening.ticketPrice}</p>
                      <p><span className='font-bold'>⭐ Rating: </span>{each.evening.rating}</p>
                      <p><span className='font-bold'>🚌 Travel time: </span>{each.evening.traveltime}</p>
                    </div>
                </div>
                
            </li>)}
        </ul>
    </div>
  )
}

export default PlacesToVisit