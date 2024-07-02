import React from 'react';
import GridCard from '../GridCard/GridCard';
import Navbar from '../Navbar/Navbar';
import PageBar from '../PageBar/PageBar';
import DropDown from '../DropDown/DropDown';
import { Button } from 'antd';


function GearShop() {
  return (
    <>
      <div className='category button'
        style={{
          position: 'absolute',
          left: '160px',
          top: '13px'
        }}
      >
        <Button>헬멧</Button>
        <Button>자켓</Button>
        <Button>글러브</Button>
      </div>
      <div
        style={{
        }}
      >
        <Navbar />
      </div>
      <div>
        <DropDown />
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