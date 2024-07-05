import React from 'react'
import Navbar from '../Navbar/Navbar'
import GridCard from '../GridCard/GridCard'
import DropDown from '../DropDown/DropDown'

function PartsStore() {
  return (
  
  
    <>
      <div
        className='navBar'
      >
        <Navbar />
      </div>

      <DropDown />

      <div>
        <GridCard />
      </div>
    </>

  )
}

export default PartsStore