import {React,useEffect,useState} from 'react'
import classes from './AnimePanel.module.css'
import imgs from '../assets/sth.jpg'
import FlwItem from './FlwItem'
import FilmList from './FilmList'
import Axios from '../config/Axios'
export default function AnimePanel() {
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
    <div className={classes['container']}>
     <div className={classes['main-content']}>
     <section className={classes['block-area']}>
         <div className={classes['block-area-header']}>
             <div className={classes['float-left anime-head']}>
                 <h2 className={classes['cat-head']}>Latest Episode</h2>
             </div>
             {/* <div className={classes['float-right view-more']}>
                 <p className={classes['txt']}>View More</p>
             </div> */}
         </div>
         <div className={classes['tab-content']}>
       <FilmList animes={anime} type={type}></FilmList>
       {/* <FilmList></FilmList> */}
         
         </div>
     </section>
     
    </div>
    <div className={classes['main-sidebar']}>
    <div className={classes['block-area']}>
    <div className={classes['float-left anime-head']}>
                 <h2 className={classes['cat-head']}>Genres</h2>
             </div>
    <div className={classes['block-area-content']}>
        <div className={classes['cbox']}>
            <ul className={classes['genre-list']}>
            <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
                <li>
                    <a>Action</a>
                </li>
              
            </ul>
            <button className={classes['btn-showmore']}>Show More</button>
        </div>
    </div>         
    </div>
   

    </div>
    </div>
  )
}
