import React from 'react';
import GridCard from '../GridCard/GridCard';
import Navbar from '../Navbar/Navbar';
import PageBar from '../PageBar/PageBar';
import { Button } from 'antd';
import BrandDrop from '../DropDown/GrearBrandDrop';
import CategoryDrop from '../DropDown/GearCategoryDrop';
import CategoryDropExtra from '../DropDown/GrearCategoryExtra';
import { Link } from 'react-router-dom';
import AdBanner from '../img/ad/ad01.png'

function GearShop() {
  return (
    <>
      <div className='category button'
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          left: '160px',
          top: '13px'
        }}
      >
        <Button>헬멧</Button>
        <Button>자켓</Button>
        <Button>부츠</Button>
      </div>

      <div className='gearBrand'
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'row',
          gap: '15px',
          left: '160px',
          top: '55px'
        }}
      >
        <BrandDrop />
        <CategoryDrop />
        <CategoryDropExtra />
      </div>

      <div
        style={{
        }}
      >
        <Navbar />
      </div>
      <div
        style={{
          position: 'absolute',
          top: '250px',
          right: '20px'
        }}
      >
        <Link to={'https://ysk.co.kr/'}>
          <img src={AdBanner} 
            style={{
              width: '200px'
            }}
          />
        </Link>
      </div>
      <div
        className='priceButton'
        style={{
          position: 'relative',
          display: 'flex',
          gap: '10px',
          left: '10px',
          margin: "10px auto"
        }}
      >
        <Button>추천순</Button>
        <Button>인기순</Button>
        <Button>높은가격</Button>
        <Button>낮은가격</Button>
      </div>
      <hr />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <GridCard />
      </div>
      <div style={{ margin: '30px auto' }}>
        <PageBar />
      </div>
    </>
  )
}

export default GearShop