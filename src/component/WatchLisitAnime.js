import {React,useState,useContext,useEffect} from 'react'
import classes from './FilmList.module.css'
import imgs from '../assets/sth.jpg'
import AnimeContext from './store/context';
import { Link } from 'react-router-dom';
export default function FilmList(props) {
    const [isShow,setIsShow]=useState(-1);
    const ctx=useContext(AnimeContext);
   
    const [AnimeItem,setItem]=useState();
    const [Animes,setAnimes]=useState(ctx.items);
    const [listAnime,setListAnime]=useState(props.animes)
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
        setIsShow(-1);
        setListAnime(listAnime.filter((item)=>item.aniType==='watch'))
     
    }
    const holdHandler=(ani)=>{
        ctx.addHold(ani);
        setIsShow(-1)
        setListAnime(listAnime.filter((item)=>item.aniType==='hold'))
      
    }
    const removeHandler=(ani)=>{
        ctx.removeItem(ani)
        setIsShow(-1)
 
    }
  
   
  return (
    <div className={classes['film_list']}>
    <div className={classes['film_list-wrap']}>
{
  props.animes.map((anime,ind)=>{
        
        return(
            <div className={classes['flw-item']}>
            <div className={classes['dr-fav']}>
      <div className={classes['btn-fav']} onClick={()=>props.showHandler(ind)}>
      {/* {ctx.items.map((item)=>{
         item.id===anime.id ?  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> :  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
         
      })} */}
      {}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>
     
      </div>
      {props.isShow===ind &&   <div className={classes['dropdown-menu']}>
          <div className={classes['dropdown_item']} onClick={()=>props.ChildwatchHandler(anime)}>Watching</div>
          <div className={classes['dropdown_item']} onClick={()=>props.ChildholdHandler(anime)}>Hold</div>
          <div className={classes['dropdown_item']} style={{ color:'red' }} onClick={()=>{props.ChildremoveHandler(anime)}}>Remove</div>
      </div>}
    
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
