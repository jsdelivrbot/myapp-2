import React,{Component} from 'react';
import {Swiper,SwiperSlide} from 'framework7-react';

import img from '../../assets/img/login-banner1.png';

export default class BannerSwiper extends Component{
  render() {
    return (
      <Swiper init={true} pagination>
        <SwiperSlide className='item1'>
          <img src={ img } alt='' />
        </SwiperSlide>
        <SwiperSlide className='item2'>
          <img src={ img } alt='' />
        </SwiperSlide>
        <SwiperSlide className='item3'>
          <img src={ img } alt='' />
        </SwiperSlide>
        <SwiperSlide className='item3'>
          <img src={ img } alt='' />
        </SwiperSlide>
        <SwiperSlide className='item3'>
          <img src={ img } alt='' />
        </SwiperSlide>
        <SwiperSlide className='item3'>
          <img src={ img } alt='' />
        </SwiperSlide>
        <SwiperSlide className='item3'>
          <img src={ img } alt='' />
        </SwiperSlide>
        <SwiperSlide className='item3'>
          <img src={ img } alt='' />
        </SwiperSlide>
      </Swiper>
    )
  }
}