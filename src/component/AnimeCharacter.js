import React, { useState } from 'react'
import classes from './AnimeCharacter.module.css'
import { Swiper, SwiperSlide, Navigation, Pagination  } from "swiper/react";
import tanjiro from '../assets/5ede49f9b760540004f2c5e7.png'

import Slider from 'react-slick';
function SampleNextArrow(props) {
        
  const { className, style, onClick } = props;

  return (
    // <div
    //   className={className}
    //   style={{ ...style,  background: "red",borderRadius:'50%' }}
    //   onClick={onClick}
    // />

          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#faa300" class="bi bi-caret-right" viewBox="0 0 16 16" className={classes.nextBtn}  onClick={onClick}>
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
  <div>
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#faa300"  class="bi bi-caret-left" viewBox="0 0 16 16" className={classes.prevBtn}  onClick={onClick}>
    <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
  </svg>
  </div>
   
  );
}

export default function AnimeCharacter(props) {
  const [over,setOver]=useState(false);
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true, nextArrow:<SampleNextArrow/>,
    prevArrow:<SamplePrevArrow/>
  };

//  const mover=(event)=>{
//    event.target.style.width='70%';
//  }
//  const mout=(event)=>{
//   event.target.style.width='60%';
//  }
  return (
   
    <Slider {...settings} className={classes['a-container']}>
    {
      props.character.map((cha)=>{
        return(
          <div className={classes['slider-cont']} key={cha.id} >
   
   <img src={`http://127.0.0.1:8000/images/${cha.image}`} className={classes.cha} alt='hi'  />
  
 </div>
        )
      })
    }
   

     

    </Slider>
  
  )
}
