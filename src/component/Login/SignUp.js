import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import HeaderMenu from '../HeaderMenu'
import SignUpModal from '../UI/SignUpModal'
import classes from './SignUp.module.css'
import Axios from '../../config/Axios';
export default function SignUp(props) {
  
const [username,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [conPassword,setConPassword]=useState('');
const [errorList,setErrorList]=useState([]);
const navigate=useNavigate()

const loginHandler=()=>{
  props.onHide();
  props.onLoginShow()
}
const nameHandler=(e)=>{

  setName(e.target.value)
}
const emailHandler=(e)=>{

setEmail(e.target.value)
}
const passwordHandler=(e)=>{

  setPassword(e.target.value)
}
const conPasswordHandler=(e)=>{

  setConPassword(e.target.value)
}
const submitHandler=(e)=>{
  e.preventDefault();
  const data={
           name:username,
           email:email,
           password:password,
           confirm_password:conPassword
  }
  axios.get('/sanctum/csrf-cookie').then(response => {
  axios.post('api/register',data).then(res=>{
    console.log(res.data.status)
    console.log(res.data.username)
    if(res.data.status===200){
       localStorage.setItem('auth_token',JSON.stringify(res.data.token));
       localStorage.setItem('auth_name',JSON.stringify(res.data.username));
       
       props.onHide()
    }else{
      setErrorList(res.data.validation_errors)
    }
    
  })
});
setName('');
setEmail('');
setPassword('');
setConPassword('')

 console.log(data)
 
}
console.log(errorList)
  return (
    <React.Fragment>
  <SignUpModal onHide={props.onHide}>
      <div className={classes['modal-register-section']}>
          <div className={classes['modal-header']}>
              <h5 className={classes['modal-title']}>Create Account</h5>
              <button className={classes['close']} onClick={props.onHide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
              </button>
          </div>
          <div className={classes['modal-body']}>
          <form className={classes['form-section']} onSubmit={submitHandler}>
         
          <div className={classes['form-group']}>
          <label className={classes['prelabel']} htmlFor='name'>
              Name
              </label>
              <input type='text' name="name" className={classes['form-control']} value={username} onChange={nameHandler} required />
              {
                errorList.name && <div className={classes['alert_text']}>{errorList.name}</div>
              }
              </div>
              <div className={classes['form-group']}>
          <label className={classes['prelabel']} htmlFor='email'>
               Email Address
              </label>
              <input type='' name="email" className={classes['form-control']} value={email} onChange={emailHandler} required />
              {
                errorList.email && <div className={classes['alert_text']}>{errorList.email}</div>
              }
              </div>
              <div className={classes['form-group']}>
          <label className={classes['prelabel']} htmlFor='password'>
               Password
              </label>
              <input type='password' name="password" className={classes['form-control']} value={password} onChange={passwordHandler} required/>
              {
                errorList.password && <div className={classes['alert_text']}>{errorList.password}</div>
              }
              </div>
              <div className={classes['form-group']}>
          <label className={classes['prelabel']} htmlFor='conpassword'>
               Confirm Password
              </label>
              <input type='password' name="confirm_password" className={classes['form-control']} value={conPassword} onChange={conPasswordHandler} required />
              {
                errorList.confirm_password && <div className={classes['alert_text']}>{errorList.confirm_password}</div>
              }
              </div>
              <div className={classes['form-group']}>
                  <button type='submit' className={classes['btn-primary']}>Register</button>
              </div>
          </form>
          </div>
          
          <div className={classes['modal-footer']}>
              Have an account ?
              <span className={classes['login-tab']} onClick={loginHandler}>Login</span>
          </div>
      </div>
      </SignUpModal>
    </React.Fragment>
  )
}
