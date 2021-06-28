import React from 'react'
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'

import SwiperCore, { Navigation} from 'swiper/core';
SwiperCore.use([Navigation]);

function Swipers() {
    return (
        <div className="swiper">
            {/* <Swiper navigation={true} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}
        </div>
    )
}

export default Swipers