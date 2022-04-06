import React from 'react'
import Modal from './UI/Modal'
import classes from './SideMenu.module.css'
import { Link } from 'react-router-dom'
export default function SideMenu(props) {
  return (
      <Modal onHide={props.onHide}>
      <button onClick={props.onHide} className={classes['toggle-sidebar']}>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16" >
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>
      Close menu</button>
      <ul className={classes['sidebar_menu-list']}>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Movies</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Series</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Top Airing</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Home</Link>
      </li>
      <li className={classes['nav-item']}>
        <Link to='/' className={classes['nav-link']}>Sth</Link>
      </li>
      </ul>
      </Modal>
   
  )
}