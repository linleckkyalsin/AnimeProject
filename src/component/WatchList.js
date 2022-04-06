import {React,useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import FilmList from './FilmList'
import AnimeContext from './store/context'
import WatchListAnime from './WatchLisitAnime'
import classes from './WatchList.module.css'
export default function WatchList(props) {
    const ctx=useContext(AnimeContext);
 
    const [upAnime,setUpAni]=useState(ctx.items);
    const [IsAll,setIsAll]=useState(false)
    const [isWatch,setIsWatch]=useState(false);
    const [isHold,setIsHold]=useState(false)
    const [isRemove,setIsRemove]=useState(false)
    const [isShow,setIsShow]=useState(-1);
    const allHandler=()=>{

     
      setIsAll(true)
     setIsHold(false)
     setIsWatch(false)
     setUpAni(ctx.items)
         
    }
    


    const watchHandler=()=>{
      setIsWatch(true)
      setIsAll(false)
     setIsHold(false)
      setUpAni(ctx.items.filter((item)=>item.aniType==='watch'))
     
    }
    const holdHandler=()=>{
      setIsHold(true)
      setIsWatch(false)
      setIsAll(false)
      setUpAni(ctx.items.filter((item)=>item.aniType==='hold'))
    
    }
    const removeHandler=()=>{
      setIsRemove(true)
      setUpAni(ctx.items.filter((item)=>item.aniType==='remove'))
    }
    const showHandler=(ind)=>{
      if(isShow!==-1){
          setIsShow(-1)
      }
      else{
          setIsShow(ind)
      }
    }
    const ChildwatchHandler=(ani)=>{
        
      ctx.addItem(ani);
   
      setIsShow(-1);
      if(IsAll){
        let delItem=ctx.items
      
        setUpAni(delItem)
      }
      if(isHold){
        let hold=ctx.items.filter((item)=>item.aniType==='hold')
        setUpAni(hold.filter((item)=>item.id!==ani.id))
        console.log(hold)
      }
     if(isWatch){
      let watch=ctx.items.filter((item)=>item.aniType==='watch')
      setUpAni(watch)
      console.log(watch)
     }
    
   
   
  }
  const ChildholdHandler=(ani)=>{
      ctx.addHold(ani);
      setIsShow(-1)
      if(IsAll){
        let delItem=ctx.items
      
        setUpAni(delItem)
      }
      if(isHold){
        let hold=ctx.items.filter((item)=>item.aniType==='hold')
        setUpAni(hold)
        console.log(hold)
      }
     if(isWatch){
      let watch=ctx.items.filter((item)=>item.aniType==='watch')

      setUpAni(watch.filter((item)=>item.id!==ani.id))
      console.log(watch)
     }
     
    
  }
  const ChildremoveHandler=(ani)=>{
      ctx.removeItem(ani)
      setIsShow(-1)
     
      if(IsAll){
        let delItem=ctx.items
      
        setUpAni(delItem.filter((item)=>item.id!==ani.id))
      }
      if(isHold){
        let hold=ctx.items.filter((item)=>item.id!==ani.id)
        setUpAni(hold.filter((item)=>item.aniType==='hold'))
      }
      if(isWatch){
        let watch=ctx.items.filter((item)=>item.id!==ani.id)
        setUpAni(watch.filter((item)=>item.aniType==='watch'))
      }
      
    //   if(isHold){
    //     let hold=ctx.items.filter((item)=>item.aniType==='hold')
    //     setUpAni(hold.filter((item)=>item.id!==ani.id))
    //     console.log(upAnime)
    //   }
    //  if(isWatch){
    //   let watch=ctx.items.filter((item)=>item.aniType==='watch')
    //   setUpAni(watch.filter((item)=>item.id!==ani.id))
    //   console.log(upAnime)
    //  }
      
  }
console.log(upAnime)



  // const watchHandler=(anime)=>{
  
  //   const upFav=[...fav,anime]
  //   let array=[];
  //   upFav.map((i)=>array.push(i.id))
  //   setFav(upFav)
   
  //   ctx.addItem(anime)
    
  //   localStorage.setItem('Favourite',JSON.stringify(array))
  //   localStorage.setItem('favItem'+(anime.id),JSON.stringify(anime))
  
  // }
  
  // const removeFavHandler=(anime)=>{
  //   const filteredList=fav.filter((f)=>f.id!==anime.id);
  //   let array=[];
  //   filteredList.map((i)=>array.push(i.id))
  //   setFav(filteredList)
    
  //   ctx.removeItem(anime)
  //   localStorage.setItem('Favourite',JSON.stringify(array))
  //   localStorage.removeItem('favItem'+(anime.id),JSON.stringify(anime))
  // }
  // // var sto=JSON.parse(localStorage.getItem('Favourite')||'0');
  // // sto.map()
  // // console.log(sto)
  // const ifExists=(anime)=>{
  //  const getArray=JSON.parse(localStorage.getItem('Favourite'));
  
  //   if(ctx.items.filter((item)=>item.id===anime.id).length>0){
  //     return true;
  //   }
  //   return false;
  // }
  return (
    <div className={classes['container']}>
    <div>
    <h2 className={classes['header-watch']}>
        <span ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#faa300" class="bi bi-emoji-heart-eyes-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.559 5.448a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zm-.07-5.448c1.397-.864 3.543 1.838-.953 3.434-3.067-3.554.19-4.858.952-3.434z"/>
</svg></span>
        Watch List</h2>
    </div>
      <div className={classes['fav-tabs']}>
          <ul className={classes['nav-tabs']}>
              <li className={classes['nav-items']} onClick={allHandler}>
                  <button  className={classes['nav-link']}>All</button>
              </li>
              <li className={classes['nav-items']} onClick={watchHandler}>
                  <button  className={classes['nav-link']}>Watching</button>
              </li>
              <li className={classes['nav-items']} onClick={holdHandler}>
                  <button  className={classes['nav-link']}>On hold</button>
              </li>
          </ul>
      </div>
      <div className={classes['block_area-content']}>
      {upAnime && <WatchListAnime animes={upAnime} type={props.type} showHandler={showHandler} onRemove={removeHandler} isShow={isShow} ChildholdHandler={ChildholdHandler} ChildremoveHandler={ChildremoveHandler} ChildwatchHandler={ChildwatchHandler} ></WatchListAnime> }
     
      </div>
    </div>
  )
}
