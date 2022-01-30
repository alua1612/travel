import React from 'react';
import ReactDOM from 'react-dom';
import './Instructions.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
  } from 'swiper';
  import Step1 from './images/step1.jpg';
  import Step2 from './images/step2.jpg';
  import Step3 from './images/step3.jpg';
  import Step4 from './images/step4.jpg';

  SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export default function Instructions() {
    
    return(
        <div className='container instructions'>
            <h2 className='instr-title'>Инструкция по использованию проектa</h2>
            <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
                <SwiperSlide><img src={Step1}/></SwiperSlide>
                <SwiperSlide><img src={Step2}/></SwiperSlide>
                <SwiperSlide><img src={Step3}/></SwiperSlide>
                <SwiperSlide><img src={Step4}/></SwiperSlide>
            </Swiper>
        </div>
    )
}