import {React,useEffect,useState,useContext} from 'react'
import Axios from '../config/Axios'
import FilmList from './FilmList'
import demon from '../assets/demon-sm.jpg';
import classes from './RecoList.module.css'
import AddTo from './AddTo';
import AnimeContext from './store/context';
export default function RecoList(props) {
  console.log(props.anime)
  const ctx=useContext(AnimeContext)
const [ani,setAni]=useState([])
const [filled,isFilled]=useState(-1);
const [fav,setFav]=useState([]);
const [storage,setStorage]=useState([])
console.log(props.type)

let anime=props.anime;

// if(isShow!==-1){
//   setIsShow(-1)
// }
// else{
//   setIsShow(ind)
// }
// const watchHandler=(a,i)=>{
//   // if(filled!==i){
//     // if(filled!==-1){
//     //   const newFav=[...fav,a]
//     //   setFav()
//     //   if(ctx.items.includes(newFav)){
//     //     isFilled(i)
//     //   }
//     //   isFilled(-1);
//     //   ctx.removeItem(a);
    
//   //   }
//   // else{
   
//   //   isFilled(i);
//   //   ctx.addItem(a);
//   //  if(filled!==1){}
//   // }
//   // }
//   // else{

//   // }
  



// }
const watchHandler=(anime)=>{
  
  const upFav=[...fav,anime]
  let array=[];
  upFav.map((i)=>array.push(i.id))
  setFav(upFav)
 
  ctx.addItem(anime)
  
  localStorage.setItem('Favourite',JSON.stringify(array))
  localStorage.setItem('favItem'+(anime.id),JSON.stringify(anime))

}

const removeFavHandler=(anime)=>{
  const filteredList=fav.filter((f)=>f.id!==anime.id);
  let array=[];
  filteredList.map((i)=>array.push(i.id))
  setFav(filteredList)
  
  ctx.removeItem(anime)
  localStorage.setItem('Favourite',JSON.stringify(array))
  localStorage.removeItem('favItem'+(anime.id),JSON.stringify(anime))
}
// var sto=JSON.parse(localStorage.getItem('Favourite')||'0');
// sto.map()
// console.log(sto)
const ifExists=(anime)=>{
 const getArray=JSON.parse(localStorage.getItem('Favourite'));

  if(ctx.items.filter((item)=>item.id===anime.id).length>0){
    return true;
  }
  return false;
}
console.log(fav)
  return (
    <div className={classes.container}>
      <div className={classes['main-content']}>
         <section className={classes['block_area']}>
           <div className={classes['block_area-header']}>
             <div className={classes['bah-heading']}>
               <h2 className={classes['cat-heading']}>Recommend For You</h2>
             </div>
           </div>
           <div className={classes['tab-content']}>
             <FilmList animes={anime} type={props.type}></FilmList>
           </div>
         </section>

      </div>
      <div className={classes['main-sidebar']}>
      <section className={classes['block_area']}>
           <div className={classes['block_area-header']}>
             <div className={classes['bah-heading']}>
               <h2 className={classes['cat-heading']}>Most Popular</h2>
             </div>
           </div>
           <div className={classes['block_area-content']}>
           <div className={classes['cbox']}>
           <div className={classes['cbox-content']}>
           <div className={classes['cbox-ul']}>
             <ul className={classes['ulclear']}>
             {
               props.Allanime.map((ani,ind)=>{
                 return(
 <li>
                 <div className={classes['film-poster']}>
                 <img src={`http://127.0.0.1:8000/images/${ani.bg_img}`} className={classes['film-poster-img']} />
                 </div>
                 <div className={classes['film-detail']}>
                   <h3 className={classes['film-name']}>{ani.name}</h3>
                   <div className={classes['fd-infor']}>
                     <span className={classes['fd-item']}>
                     {/* {type.map((t)=>{
                       if(t.id===ani.type_id){
                         return(
                           <span>{t}</span>
                         )
                       }
                     })} */}
                     </span>
                     <span className={classes['dot']}> </span>
                     <span className={classes['fd-item']}>Episode 25</span>
                     <span className={classes['dot']}></span>
                     <span className={classes['fd-item']}>24 min/ep</span>
                   </div>
                 </div>
                 <div className={classes['film-fav']} onClick={()=>ifExists(ani)?removeFavHandler(ani):watchHandler(ani)}>
                 {/* {filled===ind ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" onClick={()=>watchHandler(ani)} fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> :  <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" onClick={()=>watchHandler(ani,ind)} fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>} */}
{ifExists(ani) ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16"  fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg> }

                
                 </div>
               </li>
                 )
               })
             }
              
             
             </ul>
             </div>
             </div>
           </div>
           </div>
         </section>
      </div>
    </div>
  )
}
