import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
import {getAllNews} from '../../../services/api/News'
import { Link } from "react-router-dom";

const FilteredNews = () => {
  const [news, setNews] = useState();
  
  useEffect(()=>{
    async function fetchData(){
        const data = await getAllNews()
        setNews(data);
    }
    fetchData()
  },[])

  useEffect(()=>{
console.log(news);
  },[news])

  return (
    <>
      <section className={style.filteredNews}>
        <div className={style.container}>
          <div className={style.devider}></div>

          <h3 className={style.title}>
            <span>NEWS</span> <ArrowForwardIosIcon />
          </h3>

          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            // breakpoints={{
            //   640: {
            //     slidesPerView: 2,
            //     spaceBetween: 20,
            //   },
            //   768: {
            //     slidesPerView: 4,
            //     spaceBetween: 40,
            //   },
            //   1024: {
            //     slidesPerView: 5,
            //     spaceBetween: 50,
            //   },
            // }}
            className={style.swiper}
          >
            {
               news && news.data && news.data!.map((obj: object | string | number)=>{
                    return(
                    <SwiperSlide key={obj._id} className={style.swiperSlide}>
                        <img style={{objectFit:'cover', objectPosition:'center'}} src={obj.imageUrl } alt={obj.title} />
                        <Link style={{textDecoration:'none'}} to={`/news/${obj._id}`}>
                        <span>{obj.title}</span>
                        </Link>
                    </SwiperSlide>
                    )
                })
            }

          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FilteredNews;


