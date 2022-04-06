import {React,useState,useEffect} from 'react'
import FilmList from './FilmList'
import classes from './Genre.module.css'
import imgs from '../assets/sth.jpg'
import { Link, useParams } from 'react-router-dom'
import Axios from '../config/Axios'
export default function Genre(props) {
    
   
    const [api,setApi]=useState(`/anime`);
    const [data,setData]=useState([]);
    const [selectGenre,setSelectGenre]=useState('');
   const [selectYear,setSelectYear]=useState('');
    useEffect(()=>{
      
        if(props.ani_id){
            Axios.get(`/anime?year_id=${props.ani_id}`).then((res)=>{
          setData(res.data.data)
            })
            
          }
          else{
            Axios.get(api).then((res)=>{
                setData(res.data.data);
            })
          }
    },[api])
    
    // const renderByGenre=(id)=>{
   
    
    //     setApi(`/anime?genre_id=${id}`)
    //     setSelectGenre(id);
    
       
    //     console.log(data)
    // }
    const renderByYear=(id)=>{
        setApi(`/anime?year_id=${id}`)
        setSelectYear(id);
    }

  return (
    <div className={classes['container']}>
    <div className={classes['main-content']}>
    <section className={classes['block-area']}>
        <div className={classes['block-area-header']}>
            <div className={classes['float-left anime-head']}>
                <h2 className={classes['cat-head']}>
                {
                    props.ani_id? props.year.map((y)=>{
                     if(y.id==props.ani_id){
                        return(
                            <span>Anime in {y.year_name} ( {data.length} )</span>
                        )
                     }
                    
                 }) : props.year.map((y)=>{
                     if(y.id==selectYear){
                        return(
                            <span>Anime in {y.year_name} ( {data.length} )</span>
                        )
                     }
                    
                 })
                }
                
                </h2>
            </div>
            {/* <div className={classes['float-right view-more']}>
                <p className={classes['txt']}>View More</p>
            </div> */}
        </div>
        <div className={classes['tab-content']}>
          <FilmList animes={data} type={props.type}></FilmList>
        
            
        
     
        
        </div>
    </section>
    
   </div>
   <div className={classes['main-sidebar']}>
   <div className={classes['block-area']}>
   <div className={classes['float-left anime-head']}>
                <h2 className={classes['cat-head']}>Years</h2>
            </div>
   <div className={classes['block-area-content']}>
       <div className={classes['cbox']}>
           <ul className={classes['genre-list']}>
           {
               props.year.map((y)=>{
return(
    <li onClick={()=>renderByYear(y.id)}>
    <Link to={`/year/${y.id}`}> <div>{y.year_name}</div></Link>
                  
               </li>
)
               })
           }
        
             
           </ul>
         
       </div>
   </div>         
   </div>
   <div className={classes['block-area']}>
   <div className={classes['float-left anime-head']}>
                <h2 className={classes['cat-head']}>Genres</h2>
            </div>
   <div className={classes['block-area-content']}>
       <div className={classes['cbox']}>
           <ul className={classes['genre-list']}>
           {
               props.genre.map((g)=>{
return(
    <li >
                   <Link to={`/genre/${g.id}`}>{g.name}</Link>
               </li>
)
               })
           }
        
             
           </ul>
           <button className={classes['btn-showmore']}>Show More</button>
       </div>
   </div>         
   </div>
  

   </div>
   </div>
  )
}
