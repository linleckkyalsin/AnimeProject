import React from 'react'
import classes from './FlwItem.module.css';
import imgs from '../assets/sth.jpg'
export default function FlwItem() {
  return (
    <div className={classes['flw-item']}>
    
    <div className={classes['film-poster']}>
        <img className={classes['film-poster-img']} src={imgs} alt='hi'/>
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
        Something
        </h3>
        <div className={classes['fd-infor']}>
     <span className={classes['fdi-item']}>
         TV </span>
<span className={classes['dot']}></span>
<span class="fdi-item fdi-duration">24 min/ep</span>
<span className={classes['dot']}></span>
<span class="fdi-item fdi-year">2018</span>
</div>
    </div>
     
     </div>
  )
}
