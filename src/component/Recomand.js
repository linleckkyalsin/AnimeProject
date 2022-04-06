import React from 'react'
import casts from '../assets/saori hayami.jpg'
import classes from './Recomand.module.css'


export default function Recomand() {
  return (
    <div className={classes['r-container']}>
        <div className={classes['main-content']}>ji</div>
        <div className={classes['main-sidebar']}>
            <div className={classes['block-area']}>
               <div className={classes['block_area-header']}>
                   <div className={classes['bah-heading']}>
                       <h2 className={classes['cat-heading']}>Cast</h2>
                   </div>
               </div> 
               <div className={classes['block_area-content']}>
                   <div className={classes['cbox-list']}>
                       <div className={classes['cbox-content']}>
                           <div className={classes['anif-block-ul']}>
                               <ul>
                                   <li>
                                       <div className={classes['cast-poster']}>
                                           <img src={casts} className={classes['cast-poster-img']}/>
                                        
                                       </div>
                                       <div className={classes['cast-detail']}>
                                           <h3 className={classes['cast-name']}>Sthsth</h3>
                                       </div>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
  )
}
