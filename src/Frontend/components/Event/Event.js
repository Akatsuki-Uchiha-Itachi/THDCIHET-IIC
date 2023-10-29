import React from 'react'
import Navbar from '../../common/components/Navbar'
import UpcomingEvents from '../Event/components/UpcomingEvents'
import CurrentEvents from './components/CurrentEvents'
import PastEvents from './components/PastEvents'
import '../Event/css/Event.css'

const Event = () => {
  return (
    <div className='main-container'>
      <Navbar/>
      <UpcomingEvents/>
      <CurrentEvents/>
      <PastEvents/>
    </div>
  )
}

export default Event
