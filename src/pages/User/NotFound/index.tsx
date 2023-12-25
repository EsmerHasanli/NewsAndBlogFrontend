import { Box, Button } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import style from "./index.module.css"; 
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Box style={{margin:'50px 0', display:'flex', alignItems:'center', flexDirection:'column'}}>
        <h1 className={style.heading1}>Not found</h1>
        <h2 className={style.heading2}>404</h2>
        <h3 className={style.heading3}>Sorry, you've reached a page that doesn't exist.</h3>
        <Button variant='outlined' color='error' onClick={()=> navigate(-1)}>go back</Button>
      </Box>
    </>
  );
};

export default NotFound;
