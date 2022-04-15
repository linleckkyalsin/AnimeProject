import axios from 'axios';
import React, { useState } from 'react'
import Header from './Header';
import Login from './Login/Login';
import SignUp from './Login/SignUp';
import SearchRes from './SearchRes';
import SideMenu from './SideMenu';

export default function HeaderMenu() {
    const [barIsShow,setBarShow]=useState(false);
    const [signUpIsShow,setSignUpIsShow]=useState(false)
    const [loginIsShow,setLoginIsShow]=useState(false)
    const showBarHandler=()=>{
      setBarShow(true);
    }
    const hideBarHandler=()=>{
      setBarShow(false);
    }
    const showSignHandler=()=>{
      setSignUpIsShow(true)
    }
    const hideSignHandler=()=>{
      setSignUpIsShow(false)
    }
    const showLogin=()=>{
      setLoginIsShow(true)
    }
    const hideLogin=()=>{
      setLoginIsShow(false)
    }
    
  return (
    <div>
         {barIsShow && <SideMenu onHide={hideBarHandler}></SideMenu> }
         {signUpIsShow && <SignUp onHide={hideSignHandler} onLoginShow={showLogin}></SignUp>}
         {loginIsShow && <Login onHide={hideLogin} onSignShow={showSignHandler}></Login> }
      <Header onShow={showBarHandler} onHide={hideBarHandler} onLoginShow={showLogin} onSignShow={showSignHandler} onSignHide={hideSignHandler}></Header>
     
    </div>
  )
}
