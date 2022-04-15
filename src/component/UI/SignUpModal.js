import React from 'react'
import classes from './SignUpModel.module.css'
import ReactDom from 'react-dom'
import img from '../../assets/login.jpg'
const Backdrop=(props)=>{
    return(
        <div className={classes['backdrop']} onClick={props.onHide}></div>
    )
}
const ModalOverlay=(props)=>{
    return(
        <div className={classes['modaloverlay']} style={{ backgroundImage:`url(${img})`  }}>
            <div className={classes['content']}>
                {props.children}
            </div>
        </div>
    )
}
export default function SignUpModal(props) {
    const portalElement=document.getElementById('overlay')
  return (
     
    <React.Fragment>
    {ReactDom.createPortal(<Backdrop onHide={props.onHide}/>,portalElement)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
    </React.Fragment>
  )
}
