import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import style from './index.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const UserDetail = () => {  
  const navigate = useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('user')){
        navigate('/')
    }
},[localStorage.getItem('user')])

  return (
    <>
    <Helmet>
      <title>TIME | User's name</title>
    </Helmet>
    <section className={style.hero}>
        <div style={{maxWidth:'1300px', margin:'0 auto'}}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <aside style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <CardMedia
                    style={{height:'250px', objectFit: 'cover', objectPosition:'center', borderRadius:'5px'}}
                    component="img"
                    image="https://images.pexels.com/photos/13925850/pexels-photo-13925850.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="user"
                  />
                <Typography style={{marginTop:'20px'}}>Full Name</Typography>   
                <Typography style={{marginTop:'5px'}}>username</Typography>                     
              </aside>
            </Grid>

            <Grid item xs={9}>
              <section className={style.news}>
                <div>
                  <h2 style={{textAlign: 'center',}}>Subscriptions</h2>
                    <article className={style.cardWrapper}>
                      <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                          <CardMedia
                          style={{height:'250px', objectFit: 'cover', objectPosition:'top'}}
                            component="img"
                            image="https://images.pexels.com/photos/6144346/pexels-photo-6144346.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            alt="publisher"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Publisher's Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum atque itaque modi repudiandae earum temporibus iure dolore, nihil ratione nisi libero. Quas id quam obcaecati harum sint! Excepturi, perferendis ipsa?
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                          <CardMedia
                          style={{height:'250px', objectFit: 'cover', objectPosition:'top'}}
                            component="img"
                            image="https://images.pexels.com/photos/6144346/pexels-photo-6144346.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            alt="publisher"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Publisher's Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum atque itaque modi repudiandae earum temporibus iure dolore, nihil ratione nisi libero. Quas id quam obcaecati harum sint! Excepturi, perferendis ipsa?
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                          <CardMedia
                          style={{height:'250px', objectFit: 'cover', objectPosition:'top'}}
                            component="img"
                            image="https://images.pexels.com/photos/6144346/pexels-photo-6144346.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            alt="publisher"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Publisher's Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum atque itaque modi repudiandae earum temporibus iure dolore, nihil ratione nisi libero. Quas id quam obcaecati harum sint! Excepturi, perferendis ipsa?
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                      <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                          <CardMedia
                          style={{height:'250px', objectFit: 'cover', objectPosition:'top'}}
                            component="img"
                            image="https://images.pexels.com/photos/6144346/pexels-photo-6144346.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                            alt="publisher"
                          />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                              Publisher's Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum atque itaque modi repudiandae earum temporibus iure dolore, nihil ratione nisi libero. Quas id quam obcaecati harum sint! Excepturi, perferendis ipsa?
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </article>
                </div>
              </section>
            </Grid>                
          </Grid>
        </div>
    </section>
    </>
  )
}

export default UserDetail