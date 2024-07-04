import React from 'react'
import { Button, Layout} from 'antd';
import logo from '../img/logo.png'
import { Link } from 'react-router-dom';

const { Header } = Layout;



function Navbar() {
  return (

    <Layout>
      <Header
        style={{
          backgroundColor: '#aaaaaa'
        }}
      >
        <Link
          className='logoLink'
          to={'/'}
        >
          <img src={logo} width={'60px'} />
        </Link>
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