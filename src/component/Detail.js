import { React,Fragment, useEffect, useState,useContext } from 'react'

import classes from './Detail.module.css';
import demon from '../assets/demon.jpg'
import sth from '../assets/demon-sm.jpg'
import AnimeCharacter from './AnimeCharacter';
import { Link } from 'react-router-dom';
import Recomand from './Recomand';
import Cast from './Cast';
import Axios from '../config/Axios';
import AnimeContext from './store/context';
import RecomandList from './RecoList';
import RecoList from './RecoList';
export default function Detail(props) {
    const [data,setData]=useState([]);
    const [api,setApi]=useState(`/anime`);
    const [selectGenre,setSelectGenre]=useState('');
    const ctx=useContext(AnimeContext);
    const [list,setList]=useState([])
    useEffect(()=>{
        Axios.get(api).then((res)=>{
            setData(res.data.data);
        })
    },[api])
    const handleClick=(g_id)=>{

        setApi(`/anime?genre_id=${g_id}`)
        setSelectGenre(g_id);
        
    }
    const [hover,setHover]=useState(false);

    const handleEnter=()=>{
setHover(true);
    }
    const handleLeave=()=>{
setHover(false);
    }
    const style=hover?{display:'block',borderRadius:'12px'}:{display:'none'}

const handleWatch=(anime)=>{
    ctx.addItem(anime);
}
const handleHold=(anime)=>{
    ctx.addHold(anime);
}
const handleRemove=(anime)=>{
    ctx.removeItem(anime)
}
console.log(props.anime.genre)
 
  //       let list=[];
  //   Allanime.map((item)=>{
  //    item.genre.map((g)=>{
  //      if(gg.includes(g.id)){
  //        list.push(item)
  //      }
  //    })
  //  })
  //  console.log(list)
  //  let uniqueList=[];
  //  if(list){
  //    list.map((l)=>{
  //      if(!uniqueList.includes(l)){
  //        uniqueList.push(l)
  //      }
  //    })
  //  }
// console.log(uniqueList)
let lists=[];
let reco=[];
props.genre.map((g)=>{
    lists.push(g.id)
})
console.log(lists)
props.Allanime.map((ani)=>{
    ani.genre.map((g)=>{
        if(lists.includes(g.id)){
            reco.push(ani)
        }
    })
})
let uniqueani=[];
if(reco){
    reco.map((r)=>{
if(!uniqueani.includes(r) )
{
    uniqueani.push(r)
}
    })
   
}
let u=uniqueani.filter((uni)=>uni.id!==props.anime.id)
console.log(u)
  return (
      
      <Fragment>
      
  <div className={classes['main-wrapper']}>
    <div className={classes['ani_detail']}>
        <div className={classes['ani_detail-stage']}>
            <div className={classes['containers']}>
               <div className={classes['bg-image']} style={{ backgroundImage: `url(http://127.0.0.1:8000/images/${props.anime.image})`}}></div>
               <div className={classes['ani-content']}>
               <div className={classes['ani-poster']}>
               <div className={classes['film-poster']}>
                <img src={`http://127.0.0.1:8000/images/${props.anime.bg_img}`} />
                </div>
                </div>
                <div className={classes['ani-detail']}>
                <div className={classes['prebreadcrumb']}>
                    
                </div>
                <h2 className={classes['film-name']}>{props.anime.name}</h2>
                <div className={classes['film-status']}>
                    <span className={classes['item']}>
                        <div className={classes['tick-item']}>
                            {props.language.map((lang)=>{
                                if(lang.id===props.anime.language_id){
                                    return(
                                    <span>{lang.name}</span>
                                )
                                }
                              
                            })}
                        </div>
                    </span>
                    <span className={classes['dot']}></span>
                    <span className={classes['item']}>
                       {props.type.map((t)=>{
                           if(t.id===props.anime.type_id){
                               return(
                                   <span>{t.name}</span>
                               )
                           }
                       })}
                    </span>
                    <span className={classes['dot']}></span>
                    <span className={classes['item']}>
                        Episode 11
                    </span>
                    <span className={classes['dot']}></span>
                    <span className={classes['item']}>
                      {props.anime.duration_time}/ep
                    </span>
                </div>
                <div className={classes['film-buttons']}>
                    <Link to='' className={classes['btn-primary']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16"  >
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
                    Watch now</Link>

                    <div className={classes['dropdown']}></div>
                        <Link to=''  className={classes['btn-secondary']} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
                        Add to List</Link>
                        <div className={classes['dropdown-content']} onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={style}>
                            <div  onClick={()=>handleWatch(props.anime)}>Watch</div>
                            <div  onClick={()=>handleHold(props.anime)}>On Hold</div>
                            <div onClick={()=>handleRemove(props.anime)}>Remove</div>
                        </div>
                     
                    
                </div>
                <div className={classes['film-description']}>
                    <div className={classes['text']}>
                   {props.anime.description}
                   </div>
                </div>
                </div>
                <div className={classes['ani-info-wrap']}>
                   <div className={classes['ani-info']}　>
                   <div className={classes['item-hide']}　>
                       <span className={classes['item-head']}>Overview:</span>
                       <div className={classes['text']}>
                       Tanjirou, Zenitsu, and Inosuke, aided by the Sound Hashira Tengen Uzui, travel to Yoshiwara red light district to hunt down a demon that has been terrorizing the town.
                       </div>
                       
                     
                       </div>
                       <div className={classes['item']}>
                           <span className={classes['item-head']}>Director :</span>
                           <span className={classes['name']}>Scores</span>
                       </div>
                       <div className={classes['item']}>
                           <span className={classes['item-head']}>Scores :</span>
                           <span className={classes['name']}>Scores</span>
                       </div>
                       <div className={classes['item']}>
                           <span className={classes['item-head']}>Release :</span>
                           <span className={classes['name']}>Scores</span>
                       </div>
                       <div className={classes['item']}>
                           <span className={classes['item-head']}>Episode :</span>
                           <span className={classes['name']}>Scores</span>
                       </div>
                       <div className={classes['item']}>
                           <span className={classes['item-head']}>Seasons :</span>
                           <span className={classes['name']}>Scores</span>
                       </div>
                       <div className={classes['item']}>
                           <span className={classes['item-head']}>Status :</span>
                           <span className={classes['name']}>Scores</span>
                       </div>
                       <div className={classes['item-list']}>
                           <span className={classes['item-head']}>Genres :</span>
                           {props.genre.map((g)=>{
                               return(
                                <Link to={`/genre/${g.id}`} onClick={()=>handleClick(g.id)} className={classes['genre']}>{g.name}</Link>
                               )
                        
                           })}
                           
                       </div>
                       <div className={classes['item-list']}>
                           <span className={classes['item-head']}>Casts :</span>
                           {props.cast.map((c)=>{
                               return(
                                <Link to='/' className={classes['genre']}>{c.name}</Link>
                               )
                        
                           })}
                           
                       </div>
                   </div>
                </div>
               </div>
             
            </div>
           
        </div>
    </div>
</div>
<div className={classes.con}>
<AnimeCharacter character={props.character}></AnimeCharacter>
{/* <Cast cast={props.cast}></Cast> */}

</div>
<RecoList anime={u} DetailAnime={props.anime} type={props.type}  handleWatch={handleWatch} Allanime={props.Allanime}></RecoList>
      </Fragment>
  
  )
}
