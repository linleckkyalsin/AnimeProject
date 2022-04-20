import {React,useContext,useState} from 'react'
import classes from './AddTo.module.css'
import AnimeContext from './store/context';
export default function AddTo(props) {
  const [fav,setFav]=useState([]);
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
    }
    const watchHandler=(ani)=>{
      alert('hi')
      const upFav=[...fav,ani]
      let array=[];
      upFav.map((i)=>array.push(i.id))
      setFav(upFav)
     
    //  localStorage.setItem('Favourite',JSON.stringify(array))
      // localStorage.setItem('favItem'+(ani.id),JSON.stringify(ani))
            // ctx.addItem(ani);

     
    }
    const holdHandler=(ani)=>{
      
        const upFav=[...fav,ani]
        let array=[];
        upFav.map((i)=>array.push(i.id))
        setFav(upFav)
        ctx.addHold(ani);
            
      //  localStorage.setItem('Favourite',JSON.stringify(array))
      //   localStorage.setItem('favItem'+(ani.id),JSON.stringify(ani))
    }
    const removeHandler=(ani)=>{
      const filteredList=fav.filter((f)=>f.id!==ani.id);
      let array=[];
      filteredList.map((i)=>array.push(i.id))
      setFav(filteredList)
      
      ctx.removeItem(ani)
      localStorage.setItem('Favourite',JSON.stringify(array))
      localStorage.removeItem('favItem'+(ani.id),JSON.stringify(ani))
     
    }
  return (
    //onClick={()=>showHandler(ind)
      <div  className={classes['btn-fav']} onClick={()=>showHandler(props.ind)} >
    <div className={classes['btn-fav']} onClick={()=>showHandler(props.ind)}>
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
        {isShow===props.ind &&   <div className={classes['dropdown-menu']}>
        <div className={classes['dropdown_item']} onClick={()=>watchHandler(props.anime)}>Watching</div>
        <div className={classes['dropdown_item']} onClick={()=>holdHandler(props.anime)}>Hold</div>
        <div className={classes['dropdown_item']} style={{ color:'red' }} onClick={()=>removeHandler(props.anime)}>Remove</div>
    </div>}
    </div>
      
  )
}
