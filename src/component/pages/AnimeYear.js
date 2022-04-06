import {React,useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min'
import Axios from '../../config/Axios'
import Genre from '../Genre'
import HeaderMenu from '../HeaderMenu'
import Year from '../Year'
export default function AnimeYear() {
    const {id}=useParams();
    const [anime,setAnime]=useState([]);
    const [type,setType]=useState([]);
    const [genre,setGenre]=useState([]);
    const [year,setYear]=useState([]);
    console.log(id)
    useEffect(()=>{
        Axios.get(`/anime?year_id=${id}`).then((res)=>{
            setAnime(res.data.data);
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
        

    },[])
    console.log(year)
  return (
    <Fragment>
    <HeaderMenu></HeaderMenu>
    
    <Year ani_id={id} animes={anime} type={type} genre={genre} year={year}></Year>
</Fragment>
  )
}
