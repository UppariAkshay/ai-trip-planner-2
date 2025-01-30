import Navbar from "../../Components/Navbar"
// import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import { budgetOptionsList, travelOptions } from "../../Constants/options";

import { useState } from "react";
import GeocoderSearchInput from "../../Tools/GeoCoderSearchInput/GeocoderSearchInput";


function CreateTrip() {
    const [address, setAddress] = useState('');
    const [formData, setFormData] = useState({})

  // Handle input change to set the address
  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  // Handle when an address is selected from the list of suggestions
  const handleResultSelect = (result) => {
    // You can access the selected result object here
    console.log(result);
    setAddress(result.formatted);
  };

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
              <button type='button' className="bg-black px-3 py-3 h-15 w-40 text-xl text-white rounded-lg"> Generate Trip</button>
            </div>
            
        </form>

        
        
                          
    </div>
  )
}

export default CreateTrip