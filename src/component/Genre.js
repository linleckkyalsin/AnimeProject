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
    const [showMore,setShowMore]=useState(3);
    
    useEffect(()=>{
      
        if(props.ani_id){
            Axios.get(`/anime?genre_id=${props.ani_id}`).then((res)=>{
          setData(res.data.data)
            })
            
          }
          else if(props.id){
            Axios.get(`/anime?cast_id=${props.id}`).then((res)=>{
                setData(res.data.data)
                  })
          }
          else{
            Axios.get(api).then((res)=>{
                setData(res.data.data);
            })
          }
    },[api])
    
    const renderByGenre=(id)=>{
   
    
        setApi(`/anime?genre_id=${id}`)
        setSelectGenre(id);
    
       
        console.log(data)
    }
    const showHanlder=()=>{
        if(showMore>3){
            setShowMore((prev)=>prev-3)
        }
        
        else{setShowMore((prev)=>prev+3)}
        // if(showMore){
        //     setShowMore(false)
        // }
        // if(!showMore){
        //     setShowMore(true)
        // }
        
    }

  return (
    <div className={classes['container']}>
    <div className={classes['main-content']}>
    <section className={classes['block-area']}>
        <div className={classes['block-area-header']}>
            <div className={classes['float-left anime-head']}>
                <h2 className={classes['cat-head']}>
                {
                    props.ani_id? props.genre.map((gen)=>{
                     if(gen.id==props.ani_id){
                        return(
                            <span>{gen.name} ( {data.length} )</span>
                        )
                     }
                    
                 }) : props.genre.map((gen)=>{
                     if(gen.id==selectGenre){
                        return(
                            <span>{gen.name} ( {data.length} )</span>
                        )
                     }
                    
                 })
                }
                {
                    props.id && props.cast.map((c)=>{
                     if(c.id==props.id){
                        return(
                            <span>{c.name} 's animes ( {data.length} )</span>
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
    <li >
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
               
               props.genre.slice(0,showMore).map((g)=>{
return(

    <li onClick={()=>renderByGenre(g.id)}>
                   <Link to={`/genre/${g.id}`}>{g.name}</Link>
               </li>
)
               })
           }
        
             
           </ul>
           <button className={classes['btn-showmore']} onClick={showHanlder}>
           {
               showMore>3?'Show Less ': 'Show More'
           }
          </button>
       </div>
   </div>         
   </div>
  

   </div>
   </div>
  )
}
