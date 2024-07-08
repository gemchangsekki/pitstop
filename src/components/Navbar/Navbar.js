import React from 'react'
import { Button, Layout } from 'antd';
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';

const { Header } = Layout;



function Navbar() {
  return (

    <Layout>
      <Header
        style={{
          backgroundColor: '#aaaaaa',
          height: '100px'
        }}
      >
        <Link
          className='logoLink'
          style={{
            position: 'relative',
            top: '10px'
          }}
          to={'/'}
        >
          <img src={logo} width={'80px'} />
        </Link>
        <div
          style={{
            position: 'absolute',
            top: '5px',
            right: '20px'
          }}
        >
          <Button>마이페이지</Button>
        </div>
        {/* <div 
          style={{
            position: 'absolute',
            top : '22px',
            right: '20px'
          }}
        >
          <Button>로그인</Button>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '22px',
            right: '100px'
          }}
        >
          <Button>회원가입</Button>
        </div> */}

      </Header>
    </Layout>
  )
}

export default Navbar