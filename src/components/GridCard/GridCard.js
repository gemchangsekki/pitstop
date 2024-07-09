import React from 'react'
import { Card, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import emptyImage from '../img/emptyImage.png';
import { helmet01, helmet02, helmet03, jacket01, jacket02, jacket03, jacket04, boots01, boots02, boots03, helmet04, helmet05, glove01, glove02, glove03, jean01, jean02, goggle01, goggle02, binnie01, phonecase01, jacket05, jacket06, jacket07} from '../img/imgIndex';

const imgs = [
  { src: helmet01, alt: '', title: 'agv 헬멧' },
  { src: helmet02, alt: '', title: 'shoei 헬멧' },
  { src: helmet03, alt: '', title: 'arai 헬멧' },
  { src: jacket01, alt: '', title: '마크나 자켓 레드' },
  { src: jacket02, alt: '', title: '마크나 메쉬 화이트' },
  { src: jacket03, alt: '', title: '베릭 화이트/블랙' },
  { src: jacket04, alt: '', title: '레빗' },
  { src: boots01, alt: '', title: '포르마 부츠 화이트' },
  { src: boots02, alt: '', title: '시디 부츠 블랙/레드' },
  { src: boots03, alt: '', title: '헬스톤스 숏부츠' },
  { src: helmet04, alt: '', title: '쇼에이 오프로드' },
  { src: helmet05, alt: '', title: '빌트월 클래식' },
  { src: glove01 , alt: '', title: '파이브 글러브 블랙' },
  { src: glove02 , alt: '', title: '레빗 글러브' },
  { src: glove03 , alt: '', title: '파이브 글러브 옐로우' },
  { src: jean01 , alt: '', title: '마크나 라이딩 진' },
  { src: jean02 , alt: '', title: '제다이X 라이딩 진' },
  { src: goggle01 , alt: '', title: '빌트웰 고글 화이트' },
  { src: goggle02 , alt: '', title: '빌트웰 고글 블랙' },
  { src: binnie01 , alt: '', title: '몬스터 비니' },
  { src: phonecase01 , alt: '', title: 'SP 커넥트' },
  { src: jacket05 , alt: '', title: 'GT레이서 자켓' },
  { src: jacket06 , alt: '', title: '레빗 자켓' },
  { src: jacket07 , alt: '', title: '클림 자켓' },
];
const {Meta} = Card;

const GridCard= () => (
  <div 
    style={{
      width: '80%',
      position: 'relative',
      right: '100px'
      }}
  >
    <Row gutter={[48, 16]}>
      {imgs.map((img, index) => 
      <Col key={index} lg={4} md={6} sm={12} xs={24}>
        <Link>
          <Card
            hoverable
            style={{
              width: '100%'
            }}  
            cover={<img src={img.src} alt={emptyImage} />}
          >
            <Meta title={img.title}/>
          </Card>
        </Link>
      </Col>
      )}
    </Row>
  </div>
)

export default GridCard