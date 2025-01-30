import {useNavigate} from 'react-router-dom'

function AppTitleHeading
() {
  const Navigate = useNavigate()
  return (
    <div className='mt-20'>
        <h1 className='font-extrabold text-[60px]'><span className='text-indigo-600'>Plan You next Trip within minutes,</span>with personalized AI. </h1>
        <p className='text-grey-500 text-xl mt-10'>Your personal trip planner with your personal intersts and curated travelling locations</p>
        <button onClick={() => Navigate('/create-newTrip')} className='bg-black text-white px-2 py-3 rounded-xl mt-10 px-4 py-3'>Get Started, Its Free.</button>
    </div>
  )
}

export default AppTitleHeading
