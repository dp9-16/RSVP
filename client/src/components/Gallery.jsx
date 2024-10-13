import React from "react";
import NavBar from "./NavBar";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Gallery = (props) => {
  return (
    <>
      <div className="gallery">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          speed={1500}
          spaceBetween={60}
          loop={true}
          slidesPerView={1}
          className="mySwiper">
          <SwiperSlide className="swipeCont">
            <img className="swipeImg" loading='lazy' src={require('../assets/hLeft.jpeg')}/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide className="swipeCont">
            <img className="swipeImg" loading='lazy' src={require('../assets/hMiddle.jpeg')}/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
          <SwiperSlide className="swipeCont">
            <img className="swipeImg" loading='lazy' src={require('../assets/hRight.jpeg')}/>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        </Swiper>
        <div className="vertical">
          <div className="vCont"><img loading="lazy" src={require('../assets/v1.jpeg')}/><p>A</p></div>
          <div className="vCont"><img loading="lazy" src={require('../assets/v2.jpeg')}/><p>Loving</p></div>
          <div className="vCont"><img loading="lazy" src={require('../assets/v3.jpeg')}/><p>Marriage,</p></div>
          <div className="vCont"><img loading="lazy" src={require('../assets/v4.jpeg')}/><p>Promising</p></div>
          <div className="vCont"><img loading="lazy" src={require('../assets/v5.jpeg')}/><p>Joy</p></div>
          <div className="vCont"><img loading="lazy" src={require('../assets/v6.jpeg')}/><p>&</p></div>
          <div className="vCont"><img loading="lazy" src={require('../assets/v7.jpeg')}/><p>A</p></div>
          <div className="vCont"><img loading="lazy" src={require('../assets/v8.jpeg')}/><p>Bright</p></div>
          <div className="vCont"><img loading="lazy" src={require('../assets/v9.jpeg')}/><p>Future</p></div>
        </div>
      </div>
      <img className="flower1" src={require('../assets/flower1.png')} loading="lazy"/>
      <img className="flower2" src={require('../assets/flower1.png')} loading="lazy"/>
    </>
  )
}

export default Gallery;