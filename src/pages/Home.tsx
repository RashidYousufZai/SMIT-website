import React from 'react';
import { Carousel } from 'antd';
import Card from "../components/cards/Card"
import logo1 from "./saylani1.png"
import slider from "./slider.png"

const contentStyle: React.CSSProperties = {
  height: '470px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  width: '1550px'
};

const Home: React.FC = () => (
  <>
    <Carousel autoplay>
      <div className='mt-0'>
        <img style={contentStyle} src={logo1} alt="" />
      </div>
      <div className='mt-0'>
        <img style={contentStyle} src={slider} alt="" />
      </div>
      <div className='mt-0'>
        <img style={contentStyle} src={logo1} alt="" />
      </div>
      <div className='mt-0'>
        <img style={contentStyle} src={logo1} alt="" />
      </div>
    </Carousel>
    <h1 className='text-[30px] my-4 text-center'>Cource Offered</h1>
    <div className='card-box'>
      <div className='box'>
        <Card />
      </div>
      <div className='box'>
        <Card />
      </div>
      <div className='box'>
        <Card />
      </div>
      <div className='box'>
        <Card />
      </div>
    </div>
  </>
);

export default Home;