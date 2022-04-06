import React from 'react'
const AnimeContext=React.createContext({
    items:[],

    addItem:(item)=>{},
    addHold:(item)=>{},
    removeItem:(item)=>{}

})
export default AnimeContext

