import React from 'react'
import image from '../../assets/travelImage/travelImage.jpg'

function HotelRecommendations({trip}) {
  return (
    <div>
        <h1 className='text-[30px] font-bold text-left mb-5'>Hotel Recommendations</h1>
        <ul className='grid grid-cols-4 gap-5'>
            {trip?.tripData?.hotels.map(eachHotel => <li className='hover:scale-110 transition-all text-left'>
                <img src={image} className='rounded-md'/>
                <p className='font-bold text-[20px]'>{eachHotel.hotelName}</p>
                <p>📍 {eachHotel.hotelLocation}</p>
                <p>💸 {eachHotel.hotelPrice}</p>
                <p>⭐ {eachHotel.rating}</p>
            </li>)}
        </ul>
    </div>
  )
}

export default HotelRecommendations