import React from 'react'
import style from './indexs.module.css'
import { Helmet } from 'react-helmet';

const AdminLogin = () => {
  return (
  <>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100vw', height:'100vh', backgroundColor:'rgb(40,40,40)'}}>
      <div className={style.login}>
        <div className={style.h1}>Login</div>
        <input pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" id="email" name="email" type="text"/>
        <input placeholder="Password" id="password" name="password" type="password"/>
        <input value="Login" className={style.btn} type="submit"/>
      </div>
    </div>
  </>
  )
}

export default AdminLogin