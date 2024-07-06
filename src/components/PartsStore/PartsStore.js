import React from 'react'
import Navbar from '../Navbar/Navbar'
import GridCard from '../GridCard/GridCard'
import PriceSort from '../DropDown/PriceSort'

function PartsStore() {
  return (
  
  
    <>
      <div
        className='navBar'
      >
        <Navbar />
      </div>

      <PriceSort />

      <div>
        <GridCard />
      </div>
    </>

  )
}

export default PartsStore