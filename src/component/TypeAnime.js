import React from 'react'
import { useParams } from 'react-router-dom'

export default function TypeAnime() {
    const {sth}=useParams()
    const {tot}=useParams()
  return (
      <div>
      hihi
  {tot && <div>{tot}</div>}
  {sth && <div>{sth}</div>}
      </div>
   
  )
}
