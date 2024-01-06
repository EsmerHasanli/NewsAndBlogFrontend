import React, { useEffect } from 'react'
import style from './style.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Avatar, Typography } from '@mui/material';
import { getAllPublishers } from '../../../services/api/Publishers';
import { Link } from 'react-router-dom';

const PublishersSliders = () => {
  const [publishers, setPublishers] = React.useState()
  useEffect(()=>{
    async function fetchData(){
      const data = await getAllPublishers()
      setPublishers(data)
    }
    fetchData()
  })
  return (
    <section className={style.sliders}>
      <Typography className={style.heading} variant='h2' component="h1">Publishers</Typography>
      <Swiper watchSlidesProgress={true} slidesPerView={4} className={style.swiper}>
        {
          publishers && publishers.data.map((obj:any)=>{
            return(
            <SwiperSlide key={obj._id} style={{ backgroundImage: `url(${obj.backgroundImg})`}} className={style.swiperSlider}>
              <span><Link style={{color:'white', textDecoration:'none', cursor:"pointer"}} to={`/publisher/${obj._id}`}>{obj.username}</Link></span>
              <Avatar className={style.avatar} src={obj.profileImg}/>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default PublishersSliders