import React from 'react'
import classes from './AnimeList.module.css';
import hai from '../assets/sth.jpg';
export default function AnimeList() {
  return (
    <div className={classes.container}>
    <div className={classes['main-content']}>
     <div className={classes['block_area']}>
       <div className={classes['block_area-header']} >
       <div  className={classes['list-heading']}>
         <h2 className={classes['cat-heading']}>Latest Episode</h2>
       </div>
       <div  className={classes['view-more']}>
         <h2 className={classes['txt']}>View More</h2>
       </div>
       </div>
       <div className={classes['tab-content']}>
         <div className={classes['block_area-content']}>
           <div className={classes['film_list-wrap']}>
           
            <div className={classes['flw-item']}>
              <div className={classes['film-poster']} style={{ backgroundImage: `url(${hai})` }}>
                <div className={classes['tick']}>
                  <div className={classes['tick-dub']}>DUB</div>
                </div>
              
              </div>
              <div className={classes['film-detail']}>
                <h3 className={classes['film-name']}>
                  Sth
                </h3>
                <div className={classes['fd-infor']}>
                  <span className={classes['fdi-item']}>TV</span>
                  <span className={classes['dot']}></span>
                  <span className={classes['fdi-duration']}>23min</span>
                  <span className={classes['dot']}></span>
                  <span className={classes['fdi-year']}>2011</span>
                
                  
                  
                </div>
              </div>
            </div>
            <div className={classes['flw-item']}>
              <div className={classes['film-poster']} style={{ backgroundImage: `url(${hai})` }}>
                <div className={classes['tick']}>
                  <div className={classes['tick-dub']}>DUB</div>
                </div>
              
              </div>
              <div className={classes['film-detail']}>
                <h3 className={classes['film-name']}>
                  Sth
                </h3>
                <div className={classes['fd-infor']}>
                  <span className={classes['fdi-item']}>TV</span>
                  <span className={classes['dot']}></span>
                  <span className={classes['fdi-duration']}>23min</span>
                  <span className={classes['dot']}></span>
                  <span className={classes['fdi-year']}>2011</span>
                
                  
                  
                </div>
              </div>
            </div>
            <div className={classes['flw-item']}>
              <div className={classes['film-poster']} style={{ backgroundImage: `url(${hai})` }}>
                <div className={classes['tick']}>
                  <div className={classes['tick-dub']}>DUB</div>
                </div>
              
              </div>
              <div className={classes['film-detail']}>
                <h3 className={classes['film-name']}>
                  Sth
                </h3>
                <div className={classes['fd-infor']}>
                  <span className={classes['fdi-item']}>TV</span>
                  <span className={classes['dot']}></span>
                  <span className={classes['fdi-duration']}>23min</span>
                  <span className={classes['dot']}></span>
                  <span className={classes['fdi-year']}>2011</span>
                
                  
                  
                </div>
              </div>
            </div>
            <div className={classes['flw-item']}>
              <div className={classes['film-poster']} style={{ backgroundImage: `url(${hai})` }}>
                <div className={classes['tick']}>
                  <div className={classes['tick-dub']}>DUB</div>
                </div>
              
              </div>
              <div className={classes['film-detail']}>
                <h3 className={classes['film-name']}>
                  Sth
                </h3>
                <div className={classes['fd-infor']}>
                  <span className={classes['fdi-item']}>TV</span>
                  <span className={classes['dot']}></span>
                  <span className={classes['fdi-duration']}>23min</span>
                  <span className={classes['dot']}></span>
                  <span className={classes['fdi-year']}>2011</span>
                
                  
                  
                </div>
              </div>
            </div>
           </div>
         </div>
       </div>
     </div>
    </div>
    <div className={classes['main-sidebar']}>
      <div className={classes['block-area']}>
      <div className={classes['block_area-header']} >
       <div  className={classes['list-heading']}>
         <h2 className={classes['cat-heading']}>Genre</h2>
       </div>
      <div className={classes['block_area-content']}>
        <div className={classes['cbox cbox-genres']}>
          <ul className={classes['ulclear color-list sg-genre-list']}>
          <li>
            <a>Action</a>
          </li>
          </ul>
        </div>
      </div>
       </div>
      </div>
    </div>
    </div>
  )
}
