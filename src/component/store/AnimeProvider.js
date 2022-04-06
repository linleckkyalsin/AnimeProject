import {React,useReducer} from 'react'
import AnimeContext from './context'
const defaultState={

    items:[],
   
    
}
const animeReducer=(state,action)=>{
    if(action.type==='Watch'){
        const findAnimeIndex=state.items.findIndex((item)=>item.id===action.item.id)
        const findAnime=state.items[findAnimeIndex];
        let updatedAnime;
        if(findAnime){
            let sameAnimes={...findAnime};
            updatedAnime=[...state.items];
            updatedAnime[findAnimeIndex]=sameAnimes;
        }
        else{
            updatedAnime=state.items.concat(action.item)
        }
         updatedAnime.map((a)=>{
            if(a.id===action.item.id){
                a.aniType='watch'
             }
         })  
        return{
            items:updatedAnime
        }
        console.log(action.item.name)
    }
    if(action.type==='Hold'){
        const findAnimeIndex=state.items.findIndex((item)=>item.id===action.item.id)
        const findAnime=state.items[findAnimeIndex];
        let updatedAnime;
        if(findAnime){
            let sameAnimes={...findAnime};
            updatedAnime=[...state.items];
            updatedAnime[findAnimeIndex]=sameAnimes;
        }
        else{
            updatedAnime=state.items.concat(action.item)
        }
         updatedAnime.map((a)=>{
             if(a.id===action.item.id){
                a.aniType='hold'
             }
            
         })  
        return{
            items:updatedAnime
        }
        console.log(action.item.name)
    }
    if(action.type==='remove'){
         let updateAnime;
         updateAnime=state.items.filter((item)=>item.id!==action.item.id)
        //  updateAnime.map((a)=>{
        //     a.aniType='remove'
        // })  
         return{
             items:updateAnime
         }
         console.log(action.item.name)
    }


    return defaultState;
}
export default function AnimeProvider(props) {
    const [animeState,dispatchAnime]=useReducer(animeReducer,defaultState)
    const watchHandler=(item)=>{
        dispatchAnime({
            type:'Watch',
            item:item
        })
    }
    const holdHandler=(item)=>{
        dispatchAnime({
            type:'Hold',
            item:item
        })
    }
    const removeHandler=(item)=>{
        dispatchAnime({
            type:'remove',
            item:item
        })
    }
    // console.log(animeState.items)
    const MyAnimeContext={
        items:animeState.items,
        addItem:watchHandler,
        addHold:holdHandler,
        removeItem:removeHandler,
    }
  return (
    <AnimeContext.Provider value={MyAnimeContext}>
        {props.children}
    </AnimeContext.Provider>
  )
}
