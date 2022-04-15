import React, { useEffect, useState } from 'react'
import classes from './Trending.module.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import demon from '../assets/demon.jpg';
import title from '../assets/demontitle.png';
import Axios from '../config/Axios';
import { Link } from 'react-router-dom';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style,  background: "red",borderRadius:'50%' }}
    //   onClick={onClick}
    // />
    
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16" className={classes.pbtn}  onClick={onClick}>
  <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
</svg>

 
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
  //   .swiper-button {
  //     background: #2a2b31;
  //     color: #fff;
  //     font-size: 18px;
  //     width: 40px;
  //     height: 40px;
  //     line-height: 40px;
  //     text-align: center;
  //     border-radius: 6px;
  //     display: inline-block;
  //     margin: 3px 0;
  // }
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
  
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-caret-left" viewBox="0 0 16 16" className={classes.nbtn} onClick={onClick}>
    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
  </svg>
  );
}

export default function Trending() {
 
  
  const [topanime,setTopAnime]=useState([]);
  const [type,setType]=useState([]);
  const [animetype,setAnimeType]=useState([]);
  const sth='';
  useEffect(() => {
  
    Axios.get('/topanime').then((res)=>{
      setTopAnime(res.data.data);
    });
    Axios.get('/type').then((res)=>{
      setType(res.data.data);
    });
  }, [])
  
  const settings = {

    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    
      
        
        <Slider {...settings} className={classes['s-container']}  >
         { topanime.map((item)=>{
      console.log(item.anime);
      
       return(
        <div className={classes['con']} key={item.id}>
      
      <div className={classes['swipe-slider']} style={{ backgroundImage: `url(http://127.0.0.1:8000/images/${item.anime.image})` }}>
    <div className={classes['item-content']}>
      {/* <div className={classes['des-heading']} >
       <img className={classes['des-img']} src={`http://127.0.0.1:8000/images/${item.anime.title_img}`} alt='hi' />
      </div> */}
     <div className={classes['des-titleinfo']}>
     
     {item.anime.name}
  
     </div>
     <div className={classes['anime-detail']}>
       <div className={classes['series-item']}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>

</svg>

 {  type.map((t)=>{
     if(t.id===item.anime.type_id){
       return(t.name)
     }
    }
    
  )
    
    }


       </div>
       <div className={classes['series-item']}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg>
{item.anime.duration_time}/ep

       </div>

       <div className={classes['series-item']}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-fill" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5z"/>
</svg>
{item.anime.release_date}

       </div>

       <div className={classes['series-item']}>
      <span className={classes['quality']}>HD</span>

       </div>
       <div className={classes['series-item']}>
      <span className={classes['qualitysd']}>SD</span>

       </div>
      {/* <span className={'series-type'}>Tv Series</span> */}
     </div>

     <div className={classes['anime-des']}>
     {item.anime.description}
     </div>

     <div className={classes['des-btn']}>
       <button className={classes['btn-primary']}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle-fill" style={{ marginRight:'12px' }} viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>

</svg>
       Watch Now</button>
       <Link to={`detail/${item.anime.id}`} className={classes['btn-secondary']}>
       
       Detail
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" style={{ marginLeft:'12px' }} viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></Link>
     </div>
      </div>
    
     </div>
     </div>
       )
    })}
    
       
        
        </Slider>

       
      
  )
}
