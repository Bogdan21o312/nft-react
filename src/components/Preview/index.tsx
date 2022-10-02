import React from 'react';
import classes from "./Preview.module.scss";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Text, {TextVariants} from "../Text";


const Index = () => {


    return (<section className={classes.preview}>
            <div className={classes.preview__container}>
                <div className={classes.preview__content}>
                    <div className={classes.preview__blockText}>
                        <Text variant={TextVariants.TitleBig}>
                            <span>Lorem ipsum dolor sit amet</span>
                        </Text>
                        <Text variant={TextVariants.ParagraphBig}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </Text>
                    </div>
                    <div className={classes.preview__swiper}>
                        <Swiper
                            className={classes.swiper}
                            spaceBetween={30}
                            centeredSlides={true}
                            slidesPerView={1}
                            freeMode={true}
                            loop={true}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}

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
                    </div>
                    <div className={classes.preview__number}>
                        <div className={classes.preview__number_block}>
                            <Text variant={TextVariants.TitleMedium}>
                                10.1k+
                            </Text>
                            <Text variant={TextVariants.ParagraphBig}>Art Work</Text>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Index;
