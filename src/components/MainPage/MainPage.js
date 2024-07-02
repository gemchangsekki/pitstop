import React from 'react';
import Navbar from '../Navbar/Navbar';
import gearShopImage from '../img/gearShop.PNG';
import partsShopImage from '../img/parts.PNG';

function MainPage() {


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        className='main banner'
        style={{
          margin: '100px',
          textAlign: 'center'
        }}
      >
        <a
          className='partShopLink'
          href='/'
        >
          <img 
            src={partsShopImage}
            style={{
              width: '400px',
              border: '3px solid gray',
              borderRadius: '30px',
              margin: '40px 20px'
            }}
          />
        </a>
        <a
          className='gearShoplink'
          href='/GearShop'
        >
          <img 
            src={gearShopImage}
            style={{
              width: '400px',
              border: '3px solid gray',
              borderRadius: '30px',
              margin: '40px 20px'
            }}
          />
        </a>
      </div>
      
    </>
  )
}

export default MainPage