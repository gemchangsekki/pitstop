import React from 'react';
import GridCard from '../GridCard/GridCard';
import Navbar from '../Navbar/Navbar';
import PageBar from '../PageBar/PageBar';


function GearShop() {
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <GridCard />
      </div>
      <div
        style={{
          margin: '10px auto',
          textAlign: 'center'
        }}
      >
        <PageBar />
      </div>
    </>
  )
}

export default GearShop