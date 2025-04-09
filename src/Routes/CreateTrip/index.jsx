import Navbar from "../../Components/Navbar"
import { budgetOptionsList, travelOptions } from "../../Constants/options";
import React, { useState } from "react";
import GeocoderSearchInput from "../../Tools/GeoCoderSearchInput/GeocoderSearchInput";
import { AI_PROMPT } from "../../Constants/options";
import { chatSession } from "../../Services/AiModel/aiModel";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../Services/FireBase'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useGoogleOneTapLogin } from '@react-oauth/google';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function CreateTrip() {
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [showSignInPopUp, setShowSignInPopUp] = useState(false)

    // const login = useGoogleOneTapLogin({
    //   onSuccess: (credentialResponse) => console.log(credentialResponse),
    //   onError: () => console.log('Login Failed'),
      
    // });

    // console.log(login)

    const navigate = useNavigate()

    const generateTrip = async () => {
      

      setIsLoading(true)


      const FINAL_PROMPT = AI_PROMPT
      .replace('{location}', formData.location)
      .replace('{travellingwith}', formData.travellingWith)
      .replace('{budget}', formData.budget)
      .replace('{days}', formData.days)

      console.log(FINAL_PROMPT)

      const result = await chatSession.sendMessage(FINAL_PROMPT)
      const responseText = result.response.text()

      if (responseText)
      {
        saveTrip(responseText)
        setIsLoading(false)
      }
      

      
    }

    const saveTrip = async (tripData) => {
      setIsLoading(true)
      
      const docId = Date.now().toString()
      await setDoc(doc(db, "AiTrips", docId), {
        userSelection: formData,
        tripData: JSON.parse(tripData),
        id: docId
      });

      navigate(`/view-trip/${docId}`)
      setIsLoading(false)
    }

    

      
    

    

  return (
    <div>
        <Navbar />
        <h1 className="font-bold text-[40px] text-left mt-10">Tell us you travel prefernces.</h1>
        <p className="text-left text-[20px]">Just Provide some basic information, and our trip planner will generate a customize itinerary based on your preferences.</p>

        <form className="flex flex-col gap-5 mt-20">
            <label className="text-left text-[20px] font-bold">What is destination of choice?</label>
            <input type="text" onChange={(e) => setFormData(prevState => ({...prevState,location: e.target.value}))} placeholder="Enter Place Name you wanted to visit" className="h-15 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            {/* <GeocoderSearchInput setFormData={setFormData}/> */}
        
            <label className="text-left text-[20px] font-bold">How many days are you planning your trip</label>
            <input type='number' onChange={(e) => setFormData(prevState => ({...prevState,days: e.target.value}))} placeholder="Ex: 3" className="h-15 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"  />
        
            <div>
                <p className="text-left text-[20px] font-bold">What is Your Budget?</p>
                <p className="text-left text-md">The budget is exclusively allocated for activities and dining purposes.</p>
            </div>
            
            
            <ul className="flex justify-center gap-5">
                {budgetOptionsList.map(eachOption => <li key={eachOption.id} onClick={() => setFormData(prevState => ({...prevState, budget: eachOption.title}))} className={`border rounded-lg px-3 py-5 hover:shadow-lg transition-all ${formData.budget === eachOption.title ? 'border-black border-2' : 'border-gray-200'}`}>
                    <h2 className="text-[40px]">{eachOption.icon}</h2>
                    <h2 className="text-[20px] font-bold">{eachOption.title}</h2>
                    <p className="text-sm text-gray-500">{eachOption.desc}</p>
                </li>)}
            </ul>

            <p className="text-left text-[20px] font-bold">Whome are you travelling with?</p>
            <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">            
                {travelOptions.map(option => (
                    <li key={option.id} onClick={() => setFormData(prevState => ({...prevState, travellingWith: option.title}))} className={`border p-4 rounded-lg hover:shadow-lg transition-all duration-300 ${formData.travellingWith === option.title ? 'border-black border-2' : 'border-gray-200'}`}>
                    <h2 className="text-center text-[40px] mb-4">{option.icon}</h2>
                    <h2 className="font-semibold text-[20px] text-center mb-2">{option.title}</h2>
                    <p className="text-sm text-gray-600 text-center">{option.desc}</p>
                    </li>
                ))}
            </ul>

            <div className="flex justify-end">
              <button type='button' onClick={generateTrip} className="bg-black px-3 py-3 h-15 text-xl text-white rounded-lg">{isLoading ? <AiOutlineLoading3Quarters className="h-10 w-10 animate-spin" /> : 'Generate Trip'}</button>
            </div>
            
        </form>

        {/* <button onClick={login} className="bg-black text-white p-4 rounded-md hover:cursor-pointer">Sign In</button> */}
        
        {/* <GooglePlacesAutocomplete apiKey={import.meta.env.VITE_GOOGLE_PLACES_AUTOCOMPLETE_API_KEY} /> */}
        
        {/* <Dialog open={showSignInPopUp}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
            </Dialog> */}
                          
    </div>
  )
}

export default CreateTrip