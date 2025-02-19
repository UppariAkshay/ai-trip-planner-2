import React from 'react'
import travlImage from '../../assets/travelImage/travelImage.jpg'

function InfoSection({trip}) {
  console.log(trip, 'trip in InfoSection')

  return (
    <div className='mb-5'>
        <img src={travlImage} className='h-[400px] w-full object-cover rounded-md my-10'/>

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