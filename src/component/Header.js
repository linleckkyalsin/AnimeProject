import React, { useEffect, useRef, useState,useContext} from 'react'

import classes from './Header.module.css';
import logo from '../assets/logo.png';
import Axios from '../config/Axios';
import gen from '../assets/gen.jpg';
import { Swiper, SwiperSlide, Navigation, Pagination  } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';
import { Link } from 'react-router-dom';
import SearchRes from './SearchRes';
import axios from 'axios';

import AnimeContext from './store/context';


function Header(props) {

    const [isShow,setIshow]=useState(false);
    const [SearchisShow,setSearchIshow]=useState(false);
    
    const [api,setApi]=useState("/anime");
    const [category,setCategory]=useState([]);
    const [genre,setGenre]=useState([]);
    const [anime,setAnime]=useState([]);
    const [topanime,setTopAnime]=useState([]);
    const [searchanime,setSearchAnime]=useState([]);
    const searchRef=useRef();
    const [inpVal,setInpVal]=useState("");
    const [isLoader,setLoader]=useState(false);
 
    
   const devSize=window.innerWidth;
   const ctx=useContext(AnimeContext);
   console.log(devSize);

   const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
   const resizeW = () => changeDeviceSize(window.innerWidth);
   useEffect(() => {
   

    window.addEventListener("resize", resizeW); // Update the width on resize

    return () => window.removeEventListener("resize", resizeW);
  });

 console.log(deviceSize);
    const clickHandler=(event)=>{
        event.preventDefault();
        // console.log(searchRef.current.value);
    }
        
    useEffect(() => {
      Axios.get("/category").then((res)=>{
          setCategory(res.data.data);
      });
      Axios.get('/genre').then((res)=>{
        setGenre(res.data.data);
      });
      Axios.get('/anime').then((res)=>{
        setAnime(res.data.data);
      });
      Axios.get('/topanime').then((res)=>{
        setTopAnime(res.data.data);
      });
    
    }, []);
useEffect(()=>{

  if(deviceSize>1299){
    setSearchIshow(true);
  }
  else{
    setSearchIshow(false);
  }
  
},[deviceSize])
  const fetchSearchRes=(query)=>{
    Axios.get(`/animesearch?search=${query}`).then((res)=>{
      setLoader(true);
      setSearchAnime(res.data.data);
      setLoader(false);
      
    });
  
  }
  const searchAnime=searchVal=>{
   
    setInpVal(searchVal);
    if(inpVal){
      setIshow(true);
      setLoader(true);
      fetchSearchRes(inpVal);
      
    }
  
    
  
  }
  const hideHandler=()=>{
   setIshow(false);
  }
  console.log(isShow)
 
 
  const showHandler=()=>{
    
    if(SearchisShow){
      setSearchIshow(false)
    }
    else{
      setSearchIshow(true)
    }
  }
    const logoutHandler=(e)=>{
   e.preventDefault()
         localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name')
    // console.log(localStorage.getItem('auth_token'))
    // axios.post('/api/logout').then(res=>{
    //   // if(res.data.status===200){
    
    //   // }
     
    // })
 }
  let AuthButton='';
  if(!localStorage.getItem('auth_token')){

    AuthButton=<div className={classes['login-div']}>
    <div onClick={props.onLoginShow}>Login</div>
  </div>
  }
  else if(localStorage.getItem('auth_token')){
    AuthButton=<div className={classes['login-div']}>
    <div onClick={logoutHandler}>Logout</div>
  </div> 
 
  }
// useEffect(()=>{
  // Axios.get(`/animesearch?search=${searchRef.current.value}`).then((res)=>{
  //   setSearchAnime(res.data.data);
    
  // });
// },[inpVal])
    
    // topanime.map((item)=>{
    //   console.log(item.anime.name);
    // })
  
    return (
       
        <div>
            <div id='header' className={classes['header-home']}>
                <div className='con'>
                    <div className={classes['mobile_menu']} onClick={props.onShow}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#faa300" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
                    </div>
                    <Link to="/">  <img className={classes.logoImg} src={logo} alt='logo' style={{display:'block', height:'50px',float:'left',margin:'10px 35px 10px 60px' }}/>
             </Link>
                         <div className={classes.search}>
                      {
                        SearchisShow &&   <div className={classes['search-content']} >
                            <form>
                                
                                <Link to='/filter' className={classes['filter-icon']}>
                                <p>Filter</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-funnel-fill" viewBox="0 0 16 16">
  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
</svg>
                                </Link>
                                <input className='form-control' type='text' ref={searchRef} onChange={(e)=>searchAnime(e.target.value)} placeholder='Search Anime' value={inpVal}/>
                                <button className={classes['search-icon']} onClick={clickHandler}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                                </button>
                            </form>
                            {
                              isShow &&   <SearchRes searchval={inpVal} searchAnime={searchanime} isLoader={isLoader} onShow={showHandler} onHide={hideHandler}></SearchRes>
                            }
                          
                        </div>
                      }
                    </div>
            
                    <div className={classes['header_right']}>
                    {
                      AuthButton
                    }
                  
                    {localStorage.getItem('auth_token') && <div className={classes['header_right-user']}>
                        <Link to={`/watchList`} className={classes['btn-user']}>
                          {ctx.items.length!==0 ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>}
                        </Link>
                    </div>}
                    </div>
                    <div className={classes['mobile_search']} onClick={showHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill=" #faa300" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                    </div>



                </div>
            </div>
          
            {/* <div  className="swiper">
  
  <div class="swiper-wrapper">
  
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    ...
  </div>

  <div class="swiper-pagination"></div>


  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

 
  <div class="swiper-scrollbar"></div>
</div>
<Swiper

        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo} alt='hi' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gen} alt='gen' />
        </SwiperSlide>
        <SwiperSlide>
         
        </SwiperSlide>
       
      </Swiper> */}
        </div>
    )
}

export default Header
