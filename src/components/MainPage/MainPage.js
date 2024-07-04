import React from 'react';
import Navbar from '../Navbar/Navbar';
import gearShopImage from '../img/gearShop.PNG';
import partsShopImage from '../img/parts.PNG';
import { Link } from 'react-router-dom'

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
        <Link
          className='PartsStoreLink'
          to={'/partsstore'}
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
        </Link>
        
        <Link
          className='gearShopLink'
          to={'/gearshop'}
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
        </Link>
      </div>
      
    </>
  )
}

export default MainPage