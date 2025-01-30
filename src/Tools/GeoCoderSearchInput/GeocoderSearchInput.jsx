import { useState, useEffect } from 'react'

function GeocoderSearchInput(props) {
    const [searchKeyword, setSearchkeyword] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [selectedPlace, setSelectedPlace] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const {setFormData} = props


    useEffect( () => {
        const fetchSearchedKeyword = async () => {
            const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${searchKeyword}&apiKey=a20b1e52644649be97f4e53bd01ea83a`)
            const responseData = await response.json()

            if (response.ok)
            {
                setSearchResults(responseData.features)
            }

        }

        fetchSearchedKeyword()
        
    }, [searchKeyword])
    

  return (
    <div>
        <input type='search' onSelect={(e) => setFormData(prevState => ({...prevState, location: e.target.value}))} list='searchResults' placeholder='Enter the place you want to visit.' className='h-15 w-[100%] px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500' onChange={(e) => setSearchkeyword(e.target.value)} />
        <datalist className='w-[100%] bg-white text-black' id='searchResults'>
            {searchResults && searchResults.map(eachPlace => <option className='w-[100%] bg-white'>
                    {eachPlace.properties.address_line1}  {eachPlace.properties.address_line2}  {eachPlace.properties.city}  {eachPlace.properties.country}
                </option>)}
        </datalist>
    </div>
  )
}

export default GeocoderSearchInput