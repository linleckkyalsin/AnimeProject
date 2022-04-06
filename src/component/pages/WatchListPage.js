import {React,useEffect,useState} from 'react'
import Axios from '../../config/Axios'
import HeaderMenu from '../HeaderMenu'
import WatchList from '../WatchList'

export default function WatchListPage() {
    const [anime,setAnime]=useState([])
    const [type,setType]=useState([])
    useEffect(()=>{
        Axios.get(`/anime`).then((res)=>{
            setAnime(res.data.data);
        })
        Axios.get(`/type`).then((res)=>{
            setType(res.data.data);
        })
       
    },[])
  return (
    <div>
        <HeaderMenu></HeaderMenu>
        <WatchList anime={anime} type={type}/>
    </div>
  )
}
