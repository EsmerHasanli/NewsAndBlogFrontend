import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import {getAllNews} from '../../../services/api/News' 

type Props = {}

const NewsDetails = (props: Props) => {
    const { _id } = useParams();
    const [news, setNews] = useState();
    useEffect(()=>{
        async function findedNews(){
            console.log(_id);
            const allNews = await getAllNews();
            const findedNews = allNews.data.find(x => x._id == _id)

            setNews(findedNews);
        }
        findedNews()
    },[_id])
  return (
    <>
     <Typography>{news.title}</Typography>
     <Markdown>{news.body}</Markdown>
    </>
  )
}

export default NewsDetails