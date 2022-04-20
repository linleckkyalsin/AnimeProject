import {React,useEffect,useState}from 'react'
import { useParams } from 'react-router-dom'
import Axios from '../../config/Axios'
import Genre from '../Genre'
import HeaderMenu from '../HeaderMenu'
import ViewAllFilterRes from '../ViewAllFilterRes'

export default function ActorPage() {
    const {id}=useParams();
  const [anime,setAnime]=useState([])
  const [allAnime,setAllAnime]=useState([])
  const [type,setType]=useState([]);
  const [year,setYear]=useState([]);
  const [genre,setGenre]=useState([]);
  const [casts,setCast]=useState([])
  useEffect(() => {
  
  Axios.get(`/anime`).then((res)=>{
    setAllAnime(res.data.data)
  })
  Axios.get(`/cast`).then((res)=>{
    setCast(res.data.data)
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
        <Genre id={id} cast={casts} anime={anime} allAnime={allAnime} type={type} genre={genre} year={year}></Genre>
    </div>
  )
}
