import React from 'react'
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import emptyImage from '../img/emptyImage.png';
import { helmet01, helmet02, helmet03 } from '../img/imgIndex';

const imgs = [
  { src: helmet01, alt: '', tile: '' },
  { src: helmet02, alt: '', tile: '' },
  { src: helmet03, alt: '', tile: '' },
];

const GridCard= () => {
  
  const {Meta} = Card;

  return (
    <>
      <div
        style={{
          width: '80%'
        }}
      >
        <Row 
          gutter={[48, 16]}
          className=''
        >
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
          <Col 
            lg={4} md={6} sm={12} xs={24}
            className='column'
          >
            <Link>
              <Card
                hoverable
                style={{width: '100%'}}
                cover={<img src={emptyImage} alt={emptyImage} />}
              >
                <Meta title={'제품명'}/>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>  
    </>
  )
}

export default GridCard