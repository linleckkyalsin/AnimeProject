import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'
import Axios from '../../config/Axios'
import Genre from '../Genre'
import HeaderMenu from '../HeaderMenu'

export default function AnimeGenre() {
    const {id}=useParams();
    const [anime,setAnime]=useState([]);
    const [type,setType]=useState([]);
    const [genre,setGenre]=useState([]);
    const [year,setYear]=useState([]);
    const [genAnime,setGenAnime]=useState([])
    const [pagGenre,setPagGenre]=useState([])
    console.log(id)
    useEffect(()=>{
        Axios.get(`/anime?genre_id=${id}`).then((res)=>{
            setAnime(res.data.data);
        })

        Axios.get(`/type`).then((res)=>{
            setType(res.data.data);
        })
        Axios.get(`/genre`).then((res)=>{
            setGenre(res.data.data);
        })
        Axios.get(`/piggenre`).then((res)=>{
            setPagGenre(res.data.data);
        })
        Axios.get(`/year`).then((res)=>{
            setYear(res.data.data);
        })
        
       
    },[])
    
  return (
    <Fragment>
        <HeaderMenu></HeaderMenu>
        <Genre ani_id={id} animes={anime} pagGenre={pagGenre} type={type} genre={genre} year={year} genAni={genAnime}></Genre>
    </Fragment>
  )
}
