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
          margin: '20px',
          textAlign: 'center'
        }}
      >
        <a
          className='partShopLink'
          href='/'
        >
          <img 
            src={partsShopImage}
            alt='partShop'
            style={{
              width: '600px',
              border: '3px solid gray',
              borderRadius: '30px',
              margin: '40px 20px'
            }}
          />
        </a>
        <a
          className='gearShoplink'
          href='/gearshop'
        >
          <img 
            src={gearShopImage}
            alt='gearShop'
            style={{
              width: '600px',
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