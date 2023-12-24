import React from 'react'
import style from './style.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Avatar, Typography } from '@mui/material';

const PublishersSliders = () => {
  return (
    <section className={style.sliders}>
      <Typography className={style.heading} variant='h2' component="h1">Publishers</Typography>
      <Swiper watchSlidesProgress={true} slidesPerView={4} className={style.swiper}>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/3585033/pexels-photo-3585033.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/14071362/pexels-photo-14071362.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/5741051/pexels-photo-5741051.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
          <SwiperSlide style={{backgroundImage:`url("https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600")`}} className={style.swiperSlider}>
            <span>Publisher</span>
            <Avatar className={style.avatar}/>
          </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default PublishersSliders