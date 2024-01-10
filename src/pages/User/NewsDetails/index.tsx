import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { getNewsbyID } from '../../../services/api/News' 
import style from './index.module.css'

type Props = {}

const NewsDetails = (props: Props) => {
    const { id } = useParams();

    const [news, setNews] = useState();
    useEffect(()=>{
        async function findedNews(){
            const finded = await getNewsbyID(id);

            setNews(finded);

            console.log(finded);
        }
        findedNews()
    },[id])
  return (
    <>
     <h1 className={style.header}>{news?.title}</h1>
     <div className={style.newsContainer}>
      <Markdown className={style.news}>{news?.body[0]}</Markdown>
     </div>
    </>
  )
}

export default NewsDetails