import React from 'react'
import { Link } from 'react-router-dom'
import classes from './SearchResult.module.css'
import dem from '../assets/demon-sm.jpg'
import SearchModal from './UI/SearchModal';
import { useState } from 'react/cjs/react.production.min';
export default function SearchRes(props) {
  let isload=props.isLoader;
  let searchAnime=props.searchAnime.data;
  let keywordName=props.searchval
  let allAnime=props.allAnime
  console.log(searchAnime);
  console.log(props.searchval)
  const handleClick=()=>{
      console.log('hi')
  }
 console.log(allAnime)
  //updateAnime= anime.filter((item)=>item.name.toLowerCase().search(keyword.toLowerCase().trim())!==-1)
  return (
    
<SearchModal onHide={props.onHide} onShow={props.onShow}>
<div className={classes['search-result-pop']}>
    {isload ?  <div className={classes['loading-relative']}>
        <div className={classes['dot-pulse']}>
         <div className={classes['span1']}></div>
         <div className={classes['span2']}></div>
         <div className={classes['span3']}></div>
        </div>
    </div> :  <div className={classes['result']}>
     {props.searchval && <div>
     {searchAnime ?

<div>      
{searchAnime.map((ani)=>(

        <Link to={`/detail/${ani.id}`}  className={classes['nav-item']} >
            <div className={classes['film-poster']}>
                <img src={`http://127.0.0.1:8000/images/${ani.bg_img}`} className={classes['film-poster-img']}/>
            </div>
            <div className={classes['film-detail']}>
                <h3 className={classes['film-name']}>{ani.name}</h3>
                <div className={classes['film-infor']}>
                    <span>{ani.release_date}</span>
                    <i className={classes['dot']}></i>
                    <span>24 min/ep</span>
                </div>
            </div>
            </Link>
        

      ))
      }
      <Link to={`/searchkeyword/${props.searchval}`} className={classes['nav-item-bottom']}>View All Results</Link>
      </div> : <div>
      

      <Link to={`/searchkeyword/${props.searchval}`} className={classes['nav-item-bottom']}>View All Results</Link></div> 
       }
     </div>}
       
        
    </div> }
    
   
    </div>
   
</SearchModal>
    
  )
}
