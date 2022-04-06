import React from 'react'
import Slider from "react-slick";
import classes from './Popular.module.css';
import hai from '../assets/sth.jpg';
export default function Popular() {
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
      
    const settings = {
         
          infinite: true,
         
          slidesToShow: 4,
         
          speed: 500,
          
          autoplay:true,
    autoplaySpeed:2000,
    
          nextArrow:<SampleNextArrow/>,
          prevArrow:<SamplePrevArrow/>
    };
   
  return (
      
    <div>
    <h2 className={classes['title']}>Trending</h2>
    <Slider {...settings} className={classes['p-container']}>
      <div className={classes['slider-con']}>
   
        <img src={hai} alt='hi'/>
        <div>
            <h2 className={classes['trend-name']}>Super DragonBall</h2>
        </div>
      </div>
      <div className={classes['slider-con']}>
   
   <img src={hai} alt='hi'/>
   <div>
       <h2 className={classes['trend-name']}>Super DragonBall</h2>
   </div>
 </div>
 <div className={classes['slider-con']}>
   
   <img src={hai} alt='hi'/>
   <div>
       <h2 className={classes['trend-name']}>Super DragonBall</h2>
   </div>
 </div>
 <div className={classes['slider-con']}>
   
   <img src={hai} alt='hi'/>
   <div>
       <h2 className={classes['trend-name']}>Super DragonBall</h2>
   </div>
 </div>
 <div className={classes['slider-con']}>
   
   <img src={hai} alt='hi'/>
   <div>
       <h2 className={classes['trend-name']}>Super DragonBall</h2>
   </div>
 </div>
 <div className={classes['slider-con']}>
   
   <img src={hai} alt='hi'/>
   <div>
       <h2 className={classes['trend-name']}>Super DragonBall</h2>
   </div>
 </div>
    </Slider>
  </div>
  )
}
