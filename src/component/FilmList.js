import {React,useState,useContext} from 'react'
import classes from './FilmList.module.css'
import imgs from '../assets/sth.jpg'
import AnimeContext from './store/context';
import { Link } from 'react-router-dom';
import AddTo from './AddTo';
export default function FilmList(props) {
    const [isShow,setIsShow]=useState(-1);
    const ctx=useContext(AnimeContext);
   
    const [AnimeItem,setItem]=useState();
    const showHandler=(ind)=>{
        if(isShow!==-1){
            setIsShow(-1)
        }
        else{
            setIsShow(ind)
        }
        
        // if(!isShow){
        //     setIsShow(true)
        // }
        // else{
        //     setIsShow(false)
        // }
        
    }
    const watchHandler=(ani)=>{
        ctx.addItem(ani);
      
        
    }
    const holdHandler=(ani)=>{
        ctx.addHold(ani);
    
    }
    const removeHandler=(ani)=>{
        ctx.removeItem(ani)
    }
    console.log(ctx.items)
  return (
    <div className={classes['film_list']}>
    <div className={classes['film_list-wrap']}>
{
    props.animes.map((anime,ind)=>{
        
        return(
            <div className={classes['flw-item']}>
            <div className={classes['dr-fav']}>
      <div>
    <AddTo ind={ind} anime={anime}></AddTo>
      </div>
     
    
    </div>
       <div className={classes['film-poster']}>
           <img className={classes['film-poster-img']} src={`http://127.0.0.1:8000/images/${anime.bg_img}`} alt='hi'/>
           <div className={classes['overlay']}>
           <a className={classes['film-poster-ahref']}>
           <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
<path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
           </a>
           </div>
       </div>
       <div className={classes['film-detail']}>
       <h3 className={classes['film-name']}>
           {anime.name}
           </h3>
           <div className={classes['fd-infor']}>
        <span className={classes['fdi-item']}>
            
            {props.type.map((t)=>{
               if(t.id===anime.type_id){
                return(
                    <span>{t.name}</span>
                )
               }
            })}
            
            </span>
<span className={classes['dot']}></span>
<span class="fdi-item fdi-duration">{anime.duration_time} min/ep</span>
<span className={classes['dot']}></span>
<span class="fdi-item fdi-year">{anime.year}</span>
</div>
       </div>
        
        </div>
        )
    })
}
     
      
      
      
       
      
        </div>
    </div>
  )
}
