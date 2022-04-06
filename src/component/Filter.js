import {React,useState,useEffect} from 'react'
import Axios from '../config/Axios';
import FilmList from './FilmList';
import classes from './Filter.module.css'
export default function Filter(props) {
  const [checked,setChecked]=useState([]);
  const [genreChecked,setGenreChecked]=useState([]);
const [type,setType]=useState('');
const [status,setStatus]=useState('');
const [lan,setLan]=useState('');
const [searchRes,setSearchRes]=useState('');
const [animeData,setAnimeData]=useState([]);
const [updateAnimeList,setUpdateAnimeList]=useState([]);
const [found,setFound]=useState(true);


const handleTypeChange=(event)=>{
    
    setType(event.target.value);
    
  }
 
  const handleStatusChange=(event)=>{
   setStatus(event.target.value);
  }
  const handleLanguageChange=(event)=>{
    setLan(event.target.value);
  }
  const handleCheck=(value)=>
  {
    const currentIndex=checked.indexOf(value);
    const newChecked=[...checked];
    if(currentIndex===-1){
      newChecked.push(value);
    }
    else{
      newChecked.splice(currentIndex,1)
    }
    setChecked(newChecked)
    
  }

  const handleGenreCheck=(value)=>
  {
    const currentIndex=genreChecked.indexOf(value);
    const newChecked=[...genreChecked];
    if(currentIndex===-1){
      newChecked.push(value);
    }
    else{
      newChecked.splice(currentIndex,1)
    }
    setGenreChecked(newChecked)
    
  
  }
  
  
  const searchAnime=(value)=>{
    setSearchRes(value);
  }
  

  const applyFilter=(ani)=>{
    let updatedAnime=ani;
    // if(!type && !status && !lan &&!checked.length && !searchRes && !genreChecked.length){
    //   setUpdateAnimeList(all)
    //   console.log(updateAnimeList)
    // }
    if(type){
     updatedAnime=updatedAnime.filter((item)=>parseInt(item.type_id)===parseInt(type) )
    }
    if(status){
      updatedAnime=updatedAnime.filter((item)=>parseInt(item.sta_id)===parseInt(status))
    }
    if(lan){
      updatedAnime=updatedAnime.filter((item)=>parseInt(item.language_id)===parseInt(lan))
    }
    if(checked.length){
      
      updatedAnime=updatedAnime.filter((item)=>checked.includes(item.year_id))
    }
    if(searchRes){
      updatedAnime=updatedAnime.filter((item)=>item.name.toLowerCase().search(searchRes.toLowerCase().trim())!==-1)
    }
    if(genreChecked.length){
     let genres=props.genre.filter((g)=>genreChecked.includes(g.id));
    
     
     let list=[];
       updatedAnime.map((item)=>{
        item.genre.map((g)=>{
          if(genreChecked.includes(g.id)){
            list.push(item)
          }
        })
      })
      let uniqueList=[];
      if(list){
        list.map((l)=>{
          if(!uniqueList.includes(l)){
            uniqueList.push(l)
          }
        })
      }
    console.log(uniqueList)
      
      updatedAnime=uniqueList
 
      
    }

    
    
    setUpdateAnimeList(updatedAnime);
    !updateAnimeList.length?setFound(false):setFound(true)
   
  }
  useEffect(()=>{
   applyFilter(props.anime);
  },[type,status,lan,checked,searchRes,genreChecked,updateAnimeList,props.anime])
  // const handleFilter=()=>{
  //   Axios.get(`/filter?type=${type}&status=${status}&language=${lan}&genre=${genreChecked}&year=${checked}&search=${searchRes}`).then((res)=>{
  //     setAnimeData(res.data.data)
  //   })
    
  // }




  return (
    <div className={classes['main-wrapper']}>
        <div className={classes['prebreadcrumb']}>
           <div className={['page-search-wrap']}>
           <div className={classes['filter-block']}>
           <div className={classes['cate-filter']}>
           <div className={classes['category_filter-content']}>
           <form >
             <div className={classes['cfc-min-block']}>
               <div className={classes['']}>
                 <strong>Filter</strong>
               </div>
               <div className={classes['cmb-item']}>
               <div className={classes['ni-head']}>Type</div>
               <div className={classes['nl-item']}>
               <div className={classes['nli-select']}>
               <select className={classes['custom-select']} onChange={handleTypeChange}>
               <option  value='' selected>All</option>
               {props.type.map((t)=>{
                 return(
                  <option key={t.id} value={t.id}>{t.name}</option>
                 )
               
               })}
                
               </select>
               </div>
               </div>
               </div>
               <div className={classes['cmb-item']}>
               <div className={classes['ni-head']}>Status</div>
               <div className={classes['nl-item']}>
               <div className={classes['nli-select']}>
               <select className={classes['custom-select']} onChange={handleStatusChange}>
               <option value='' selected>All</option>
               {props.status.map((s)=>{
                 return(
                  <option key={s.id} value={s.id}>{s.name}</option>
                 )
               
               })}
                
               </select>
               </div>
               </div>
               </div>
               <div className={classes['cmb-item']}>
               <div className={classes['ni-head']}>Language</div>
               <div className={classes['nl-item']}>
               <div className={classes['nli-select']}>
               <select className={classes['custom-select']} onChange={handleLanguageChange}>
               <option  value='' selected>All</option>
               {props.language.map((l)=>{
                 return(
                  <option key={l.id} value={l.id}>{l.name}</option>
                 )
               
               })}
                
               </select>
               </div>
               </div>
               </div>
               
             </div>
             
             <div className={classes['cfc-min-block']}>
         
             <div className={classes['cfc-item']}>
             <div className={classes['ni-headd']}>Release</div>
             <div className={classes['ni-list']}>
             {props.year.map((y)=>{
               return(
                 <div>
                 <input type='checkbox' value={y.year_name} className={classes['custom-control-input']} onChange={()=>handleCheck(y.id)} id={y.year_name} />
               <label className={classes['btn-filter-item']} for={y.year_name} >{y.year_name}</label>
                 </div>
              
               )
             })}
              
               
               {/* {
                 props.year.map((y)=>{
                   return(
                     <div onClick={()=>handleYear(y.id)}>{y.year_name}</div>
                   )
                 })
               } */}
             </div>
             </div>
            
            
             <div className={classes['cfc-item']}>
             <div className={classes['ni-headd']}>Genre</div>
             <div className={classes['ni-list']}>
             {props.genre.map((g)=>{
               return(
                 <div>
                 <input type='checkbox' value={g.name} className={classes['custom-control-input']}  onChange={()=>handleGenreCheck(g.id)} id={g.name} />
               <label className={classes['btn-filter-item']} for={g.name} >{g.name}</label>
                 </div>
              
               )
             })}
              
               
               {/* {
                 props.year.map((y)=>{
                   return(
                     <div onClick={()=>handleYear(y.id)}>{y.year_name}</div>
                   )
                 })
               } */}
             </div>
             </div>
             <div className={classes['cfc-item']}>
               <div className={classes['ni-headd']}>
                 Search
               </div>
               <div className={classes['form-groups']}>
                 <input type='text' placeholder='Search' onChange={(e)=>searchAnime(e.target.value)} className={classes['form-controls']}/>
               </div>
             </div>
  
             </div>
           
             
           </form>
      
      </div>
      </div>
      </div>
      <div className={classes['block_area-header']}>
      <div className={classes['bah-heading']}>
        <h2 className={classes['cat-heading']}>Filter Results ({updateAnimeList.length} Animes)</h2>
      </div>
      </div>
      <div className={classes['block_area-content']}>
        {
          found ? <FilmList animes={updateAnimeList} type={props.type}></FilmList> : <p className={classes['cat-heading']} style={{ textAlign:'center' }} >Not found</p>
        }
      </div>
           </div>
      </div>
    </div>
  )
}
