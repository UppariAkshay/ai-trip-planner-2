import Navbar from "../../Components/Navbar"
// import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import { budgetOptionsList, travelOptions } from "../../Constants/options";
import { useState } from "react";
import GeocoderSearchInput from "../../Tools/GeoCoderSearchInput/GeocoderSearchInput";
import { AI_PROMPT } from "../../Constants/options";
import { FIDThresholds } from "web-vitals";
import { chatSession } from "../../Services/AiModel/aiModel";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../Services/FireBase'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const generateTrip = async () => {
      setIsLoading(true)
      console.log(formData)


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
            {/* <GeoapifyContext apiKey="a20b1e52644649be97f4e53bd01ea83a" >
                <GeoapifyGeocoderAutocomplete placeholder="Enter address here" onChange={handleInputChange} onResultSelect={handleResultSelect} className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"/>
            </GeoapifyContext> */}
            <GeocoderSearchInput setFormData={setFormData}/>
        
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

        
        
                          
    </div>
  )
}

export default CreateTrip