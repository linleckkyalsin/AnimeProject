import {React,useState} from 'react'
import ReactDom from 'react-dom'
import { Fragment } from 'react/cjs/react.production.min'
import classes from './SearchModal.module.css'

const Backdrop=(props)=>{
    return (
        <div className={classes.backdrop} onClick={props.onHide}></div>
    )
}
const ModalOverlay=(props)=>{
    return(
       <div className={classes.modaloverlay} >
       <div className={classes.content}>
       {props.children}
       </div>
           
       </div>
    )
}

export default function SearchModal(props) {
  
 
    const PortalElement=document.getElementById('overlay');
  return (
    <Fragment>
       {ReactDom.createPortal(<Backdrop onHide={props.onHide}/>,PortalElement)}
       {ReactDom.createPortal(<ModalOverlay >{props.children}</ModalOverlay>,PortalElement)}

    </Fragment>
  )
}
