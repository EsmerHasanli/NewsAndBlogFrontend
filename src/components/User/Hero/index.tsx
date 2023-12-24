import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import style from './style.module.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Hero = () => {
  return (
    <section className={style.hero}>
        <div style={{maxWidth:'1300px', margin:'0 auto'}}>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <section className={style.news}>
                        <div >
                            <article className={style.main}>
                                <span className={style.mainLeft}>
                                    <h2 className={style.mainNewsTitle}>TIME's Best Photos of 2023</h2>
                                    <h5 className={style.mainNewsTime}>DECEMBER 21, 2023 • 7:00 AM EST</h5>

                                    <p className={style.mainDescr}>The most striking, influential, and surprising photographs published by TIME in 2023, selected by TIME's photo</p>
                                </span>
                                <span className={style.mainRight}>
                                    <img src="https://images.pexels.com/photos/7870685/pexels-photo-7870685.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                                </span>
                            </article>
                        </div>

                        <div className={style.cardWrapper}>
                            <article className={style.card}>
                                <img src="https://images.pexels.com/photos/18368871/pexels-photo-18368871/free-photo-of-a-plant-in-front-of-a-green-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <span>
                                    <p>At Least 15 Dead After Prague Mass Shooting</p>
                                    <p>UPDATED: DECEMBER 21, 2023 • 12:46 PM EST</p>
                                </span>
                            </article>

                            <article className={style.card}>
                                <img src="https://images.pexels.com/photos/18368871/pexels-photo-18368871/free-photo-of-a-plant-in-front-of-a-green-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <span>
                                    <p>Your Questions About the Colorado Trump Ruling, Answered</p>
                                    <p>DECEMBER 20, 2023 • 1:36 PM EST</p>
                                </span>
                            </article>

                            <article className={style.card}>
                                <img src="https://images.pexels.com/photos/18368871/pexels-photo-18368871/free-photo-of-a-plant-in-front-of-a-green-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                                <span>
                                    <p>What You Need to Know About Winter Solstice 2023</p>
                                    <p>DECEMBER 21, 2023 • 1:42 PM EST</p>
                                </span>
                            </article>
                        </div>
                    </section>
                </Grid>
                
                <Grid item xs={3}>
                    <aside>
                        <h2 style={{textAlign: 'center', marginBottom: '20px'}}>MOST READ</h2>
                        <ul>
                            <li className={style.listStyle}>
                                <p className={style.num}>1</p>
                                <p>
                                    <span className={style.subheader}>U.S</span>
                                    <br />
                                    <span>What to Know About Washington’s Scandal Over Sex in a Senate Hearing Room</span>
                                </p>
                            </li>

                            <li className={style.listStyle}>
                                <p className={style.num}>1</p>
                                <p>
                                    <span className={style.subheader}>U.S</span>
                                    <br />
                                    <span>What to Know About Washington’s Scandal Over Sex in a Senate Hearing Room</span>
                                </p>
                            </li>


                            <li className={style.listStyle}>
                                <p className={style.num}>1</p>
                                <p>
                                    <span className={style.subheader}>U.S</span>
                                    <br />
                                    <span>What to Know About Washington’s Scandal Over Sex in a Senate Hearing Room</span>
                                </p>
                            </li>

                            <li className={style.listStyle}>
                                <p className={style.num}>1</p>
                                <p>
                                    <span className={style.subheader}>U.S</span>
                                    <br />
                                    <span>What to Know About Washington’s Scandal Over Sex in a Senate Hearing Room</span>
                                </p>
                            </li>
                        </ul>
                    </aside>
                </Grid>
            </Grid>
        </div>
    </section>
  )
}

export default Hero


