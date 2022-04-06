import {React,useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import Axios from '../../config/Axios'
import HeaderMenu from '../HeaderMenu'
import ViewAllFilterRes from '../ViewAllFilterRes'

export default function ViewResult() {
  const {keyword}=useParams();
  const [anime,setAnime]=useState([])
  const [allAnime,setAllAnime]=useState([])
  const [type,setType]=useState([]);
  const [year,setYear]=useState([]);
  const [genre,setGenre]=useState([]);
  useEffect(() => {
  Axios.get(`/anime?search=${keyword}`).then((res)=>{
    setAnime(res.data.data)
  })
  Axios.get(`/anime`).then((res)=>{
    setAllAnime(res.data.data)
  })
  Axios.get(`/type`).then((res)=>{
    setType(res.data.data);
})
Axios.get(`/genre`).then((res)=>{
  setGenre(res.data.data);
})
Axios.get(`/year`).then((res)=>{
  setYear(res.data.data);
})
  }, [])
  return (
    <div>
        <HeaderMenu></HeaderMenu>
        <ViewAllFilterRes anime={anime} allAnime={allAnime} type={type} genre={genre} year={year}></ViewAllFilterRes>
    </div>
  )
}
