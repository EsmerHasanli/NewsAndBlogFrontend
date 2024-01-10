import { Avatar, Container, } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import style from './index.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllPublishers, getPublisherByID } from '../../../services/api/Publishers';
import { object } from 'zod';


const PublisherDetail = () => {
    const { id } = useParams();
    const [publisher, setPublisher] = useState();
    const navigate = useNavigate()
    useEffect(()=>{
        async function findedPublisher(){
            console.log(id);
            const findedPublisher = await getPublisherByID(id);

            setPublisher(findedPublisher);
        }
        findedPublisher()
    },[id])

  return (
    <>
    {
        publisher && 
        <>
            <Helmet>
            <title>TIME | {publisher?.name}</title>
            </Helmet>
            <div style={{ backgroundImage: `url(${publisher?.backgroundImg})`, width: '100%',  height: '300px',  backgroundSize: 'cover',  backgroundPosition:'center', backgroundRepeat:'no-repeat' }}></div>
            <Container style={{marginTop:'25px', display:'flex', gap:'25px'}}>
            <div>
                <Avatar style={{ width:'160px', height:'160px'}} src={publisher?.profileImg}></Avatar>
            </div>
            <div>
                <h1 className={style.heading}>
                {publisher?.name}
                </h1>
                <p className={style.info}>@{publisher?.username} ‧ 98.4K subscribers ‧ 71 posts</p>
                <p className={style.descr}>{publisher?.description}</p>
                <button className={style.btn}>subscribe</button>
            </div>
            </Container>
            <Container>
            <section className={style.filteredNews}>
                <div className={style.container}>
                <div className={style.devider}></div>

                <h3 className={style.title}>
                    <span>Publications</span> <ArrowForwardIosIcon />
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
            </Container>
        </>
    }
    </>
  )
}

export default PublisherDetail