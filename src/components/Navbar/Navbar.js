import React from 'react'
import { Button, Layout, Menu } from 'antd';
import logo from '../img/logo.png'

const { Header } = Layout;



function Navbar() {
  return (

    <Layout>
      <Header>
        <a href='/'>
          <img src={logo} width={'60px'} />
        </a>
        <div 
          style={{
            float: 'right',
          }}
        >
          <Button>로그인</Button>
        </div>
        <div
          style={{
            float:'right',
            marginRight:'10px'
          }}
        >
          <Button>회원가입</Button>
        </div>
        {/* <div>
            <div className='sign_up_btn'
              style={{
                textAlign: 'right'
              }}
            >
                <Button>회원가입</Button>
            </div>
          
          
        </div> */}

      </Header>
    </Layout>
  )
}

export default Navbar