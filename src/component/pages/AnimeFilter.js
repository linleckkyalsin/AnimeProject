import {React,useState,useEffect} from 'react'
import { Fragment } from 'react/cjs/react.production.min'
import Axios from '../../config/Axios';
import Filter from '../Filter'
import HeaderMenu from '../HeaderMenu'

export default function AnimeFilter() {
  const [type,setType]=useState([]);
  const [status,setStatus]=useState([]);
  const [language,setLanguage]=useState([]);
  const [year,setYear]=useState([]);
  const [genre,setGenre]=useState([]);
  const [anime,setAnime]=useState([]);
 
  useEffect(()=>{
  
    Axios.get(`/type`).then((res)=>{
        setType(res.data.data);
    })
    Axios.get(`/status`).then((res)=>{
      setStatus(res.data.data);
  })
  Axios.get(`/status`).then((res)=>{
    setStatus(res.data.data);
})
Axios.get(`/language`).then((res)=>{
  setLanguage(res.data.data);
})
Axios.get(`/year`).then((res)=>{
  setYear(res.data.data);
})
Axios.get(`/anime`).then((res)=>{
  setAnime(res.data.data);
})
Axios.get(`/genre`).then((res)=>{
  setGenre(res.data.data);
})

},[])
  return (
    <Fragment>
        <HeaderMenu></HeaderMenu>
        <Filter type={type} status={status} language={language} year={year} genre={genre} anime={anime}></Filter>
    </Fragment>
  )
}
