import React from 'react'
import travlImage from '../../assets/travelImage/travelImage.jpg'
import tripBanner from '../../assets/trip-banner/world-trip-banner.jpg'

function InfoSection({trip}) {
  console.log(trip, 'trip in InfoSection')

  return (
    <div>
      <div className='flex flex-row justify-center'>
        <img src={tripBanner} className='w-full h-[500px] rounded-[40px] py-5'/>
      </div>
        

        <h1 className='text-[30px] font-bold text-left mb-3'>{trip?.userSelection?.location}</h1>
        <ul className='flex gap-5'>
            <li className='bg-gray-200 rounded-full px-4 py-3'>📅 {trip?.userSelection?.days} Days </li>
            <li className='bg-gray-200 rounded-full px-4 py-3'>💰 {trip?.userSelection?.budget} Budget </li>
            <li className='bg-gray-200 rounded-full px-4 py-3'>🧳 Travelling With{trip?.userSelection?.travellingWith}</li>
        </ul>
    </div>
  )
}

export default InfoSection