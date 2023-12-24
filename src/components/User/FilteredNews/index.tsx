import React from "react";
import style from "./index.module.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FilteredNews = () => {
  return (
    <>
        <section className={style.filteredNews}>
        <div className={style.container}>
            <div className={style.devider}></div>

            <h3 className={style.title}>
                <span>FUTURE OF WORK</span> <ArrowForwardIosIcon />
            </h3>

            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                640: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 4,
                spaceBetween: 40,
                },
                1024: {
                slidesPerView: 5,
                spaceBetween: 50,
                },
            }}
            className={style.swiper}
            >
            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
                <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <span>
                    Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
                </span>
            </SwiperSlide>
            </Swiper>
        </div>
        </section>

        <section className={style.filteredNews}>
        <div className={style.container}>
        <div className={style.devider}></div>

        <h3 className={style.title}>
            <span>FUTURE OF WORK</span> <ArrowForwardIosIcon />
        </h3>

        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            }}
            className={style.swiper}
        >
            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>
        </Swiper>
        </div>
        </section>


        <section className={style.filteredNews}>
        <div className={style.container}>
        <div className={style.devider}></div>

        <h3 className={style.title}>
            <span>FUTURE OF WORK</span> <ArrowForwardIosIcon />
        </h3>

        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            }}
            className={style.swiper}
        >
            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>

            <SwiperSlide className={style.swiperSlide} >
            <img src="https://images.pexels.com/photos/19562112/pexels-photo-19562112/free-photo-of-the-ceiling-of-a-building-with-a-large-skylight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>
                Best Dyson Vacuums: 9 Picks for Every Cleaning Concern
            </span>
            </SwiperSlide>
        </Swiper>
        </div>
        </section>
    </>
  );
};

export default FilteredNews;
