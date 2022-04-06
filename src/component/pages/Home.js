import React, { useState } from 'react'
import AnimePanel from '../AnimePanel'
import Header from '../Header'
import HeaderMenu from '../HeaderMenu'
import Popular from '../Popular'
import SideMenu from '../SideMenu'
import Trending from '../Trending'

export default function Home() {
//   const [barIsShow,setBarShow]=useState(false);
// const showBarHandler=()=>{
//   setBarShow(true);
// }
// const hideBarHandler=()=>{
//   setBarShow(false);
// }
  return (
    <React.Fragment>
      <HeaderMenu></HeaderMenu>
      <Trending></Trending>
      <Popular></Popular>
      <AnimePanel></AnimePanel>
    </React.Fragment>
  )
}
