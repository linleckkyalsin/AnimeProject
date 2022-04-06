import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css';
import { Fragment } from 'react/cjs/react.production.min'
const Backdrop=(props)=>{
    return(
        <div className={classes.backdrop} onClick={props.onHide}></div>
    )
}
const ModalOverlay=props=>{
    return(
        <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
        </div>
    )
}
export default function Modal(props) {
    const PortalElement=document.getElementById('overlay');
  return (
    <Fragment>
        {ReactDom.createPortal(<Backdrop onHide={props.onHide}/>,PortalElement)}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </Fragment>
  )
}
