
import { React,Fragment, useEffect, useState } from 'react'

import Detail from '../Detail'
import HeaderMenu from '../HeaderMenu'
import { useLocation, useParams } from "react-router-dom";
import Axios from '../../config/Axios';
export default function AnimeDetail() {
  const [Allanime,setAnime]=useState([])
  const {id}=useParams();
  const [data,setData]=useState([])
  const [lan,setLan]=useState([]);
  const [type,setType]=useState([]);
  const [genre,setGenre]=useState([]);
  const [character,setCharacter]=useState([]);
  const [cast,setCast]=useState([]);
 const [gg,setgg]=useState([]);
 const [reco,setReco]=useState([]);
  useEffect(()=>{
    Axios.get(`/anime`).then((res)=>{
      setAnime(res.data.data);
    });
      Axios.get(`/anime?anime_id=${id}`).then((res)=>{
        setData(res.data.data);
      });

      Axios.get(`/language`).then((res)=>{
        setLan(res.data.data);
      })
      Axios.get('/type').then((res)=>{
        setType(res.data.data);
      });
      Axios.get(`/genre?anime_id=${id}`).then((res)=>{
        setGenre(res.data.data);
      })
      Axios.get(`/character?anime_id=${id}`).then((res)=>{
        setCharacter(res.data.data);
      })
      Axios.get(`/cast?anime_id=${id}`).then((res)=>{
        setCast(res.data.data);
      })

     console.log(data)
    
  
    },[id]);
    console.log(reco)

  return (
    <Fragment>
        <HeaderMenu></HeaderMenu>
        <Detail id={id} anime={data} language={lan} type={type} genre={genre} Allanime={Allanime} character={character} cast={cast}></Detail>
    </Fragment>
  )
}
