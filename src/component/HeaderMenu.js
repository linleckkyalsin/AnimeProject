import React, { useState } from 'react'
import Header from './Header';
import SearchRes from './SearchRes';
import SideMenu from './SideMenu';

export default function HeaderMenu() {
    const [barIsShow,setBarShow]=useState(false);
    const showBarHandler=()=>{
      setBarShow(true);
    }
    const hideBarHandler=()=>{
      setBarShow(false);
    }
  return (
    <div>
         {barIsShow && <SideMenu onHide={hideBarHandler}></SideMenu> }
      <Header onShow={showBarHandler} onHide={hideBarHandler}></Header>
     
    </div>
  )
}
