import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './component/Login/SignUp'
import AnimeDetail from './component/pages/AnimeDetail'
import AnimeFilter from './component/pages/AnimeFilter'
import AnimeGenre from './component/pages/AnimeGenre'
import AnimeYear from './component/pages/AnimeYear'
import Home from './component/pages/Home'
import ViewResult from './component/pages/ViewResult'
import WatchListPage from './component/pages/WatchListPage'
import TypeAnime from './component/TypeAnime'
import ViewAllFilterRes from './component/ViewAllFilterRes'
import WatchList from './component/WatchList'

export default function MainRouter() {
  return (
    <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/detail/:id' element={<AnimeDetail/>}></Route>
        <Route path='/genre/:id' element={<AnimeGenre/>}></Route>
        <Route path='/year/:id' element={<AnimeYear/>}></Route>
        <Route path='/filter' element={<AnimeFilter/>}></Route>
        <Route path='/searchkeyword/:keyword' element={<ViewResult/>}></Route>
        <Route path='/movie/:sth' element={<TypeAnime/>}></Route>
        <Route path='/series/:tot' element={<TypeAnime/>}></Route>
        <Route path='/watchList' element={<WatchListPage/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
    </Routes>
  )
}
