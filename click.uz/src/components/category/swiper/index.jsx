
import React, { useRef, useState } from "react";
// Import Swiper React components   
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import "./style.css";

import SwiperCore, { Navigation } from 'swiper/core';

// import Slider from '../slider/slider'

SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <Swiper
        // spaceBetween={50}
        // slidesPerView={3}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide navigation={true} className="mySwiper">
                <Slider image="https://click.uz/click/images/category/cat1.png" text="Mobil operatorlar" />
            </SwiperSlide>
            <SwiperSlide>
                <Slider image="https://click.uz/click/images/category/cat2.png" text="Mobil operatorlar" />
            </SwiperSlide>
            <SwiperSlide>
                <Slider image="https://click.uz/click/images/category/caz3.png" text="Mobil operatorlar" />
            </SwiperSlide>
            <SwiperSlide>
                <Slider image="https://click.uz/click/images/category/cat4.png" text="Mobil operatorlar" />
            </SwiperSlide>
            <SwiperSlide>
                <Slider image="https://click.uz/click/images/category/cat5.png" text="Mobil operatorlar" />
            </SwiperSlide>

        </Swiper>
    );
};

export default Slider;