import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../Services/FireBase'
import InfoSection from '../../Components/Infosection'
import HotelRecommendations from '../../Components/HotelRecommendations'
import PlacesToVisit from '../../Components/PlacesToVisit'
import Navbar from '../../Components/Navbar'

function ViewTrip() {
    const [tripData, setTripData] = useState([])
    const {tripID} = useParams()


    useEffect( () => {
        tripID && getTripData()

    }, [])


    const getTripData = async () => {
        const docRef = doc(db, 'AiTrips', tripID)
        const docSnap = await getDoc(docRef)


        console.log(docSnap.data(), 'docSnap')
        if (docSnap.exists())
        {
            console.log(docSnap.data(), 'docSnap exists')
            setTripData(docSnap.data())
        }
        else{
            console.log('no trip data')
          }
    }
    
  return (
    <div>
        <Navbar />
        <h1 className='font-bold text-[30px]'>Trip Information</h1>
        <InfoSection trip = {tripData} />
        <HotelRecommendations trip = {tripData} />
        <PlacesToVisit trip={tripData} />
    </div>
  )
}

export default ViewTrip