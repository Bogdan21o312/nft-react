import React from 'react';
import SwiperCore, {Virtual, Pagination, Autoplay} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import classes from "./Preview.module.scss";
import "./Swiper.scss";

SwiperCore.use([Virtual, Pagination, Autoplay]);

const Index = () => {


    return (
        <>
            <Swiper
                className={classes.swiper}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    type: 'fraction',
                }}

            >
                <SwiperSlide>11111</SwiperSlide>
                <SwiperSlide>11111</SwiperSlide>
                <SwiperSlide>11111</SwiperSlide>
                <SwiperSlide>11111</SwiperSlide>
                <SwiperSlide>11111</SwiperSlide>
                <SwiperSlide>11111</SwiperSlide>
                <SwiperSlide>11111</SwiperSlide>
                <SwiperSlide>11111</SwiperSlide>

            </Swiper>
        </>
    );
}


export default Index;