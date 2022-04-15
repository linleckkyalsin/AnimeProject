import axios from 'axios';
import React,{useState} from 'react'
import Axios from '../../config/Axios';
import SignUpModal from '../UI/SignUpModal'
import classes from './Login.module.css'
export default function Login(props) {
    
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [errorList,setErrorLists]=useState([]);
const [invalidLog,setInvalidLog]=useState('');
const emailHandler=(e)=>{
    setEmail(e.target.value)
    }
const passwordHandler=(e)=>{
      setPassword(e.target.value)
    }
    const registerHandler=()=>{
        props.onHide();
        props.onSignShow()
    }
    const submitHandler=(e)=>{
        e.preventDefault();
        const data={
            'email':email,
            'password':password
        }
       axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/api/login',data).then(res=>{
            if(res.data.status===200){
                localStorage.setItem('auth_token',JSON.stringify(res.data.token))
                localStorage.setItem('auth_name',JSON.stringify(res.data.username));
                props.onHide();
            }
            else if(res.data.status===401){
                 setInvalidLog(res.data.message)
            }
            else{
                setErrorLists(res.data.validation_errors)
                
            }
        })
     });
        setEmail('');
        setPassword('');

    
       
      }
      console.log(errorList)
  return (
      <SignUpModal onHide={props.onHide}>
   <div className={classes['modal-register-section']}>
          <div className={classes['modal-header']}>
              <h5 className={classes['modal-title']}>Welcome Back</h5>
              <button className={classes['close']} onClick={props.onHide}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
              </button>
          </div>
          <div className={classes['modal-body']}>
          <form className={classes['form-section']} onSubmit={submitHandler}>
         
              {invalidLog && <div>{invalidLog}</div>}
          
              <div className={classes['form-group']}>
          <label className={classes['prelabel']} htmlFor='email'>
               Email Address
              </label>
              <input type='email' className={classes['form-control']} name='email' value={email} onChange={emailHandler} />
              {
                errorList.email && <div className={classes['alert_text']}>{errorList.email}</div>
              }
              </div>
              <div className={classes['form-group']}>
          <label className={classes['prelabel']} htmlFor='password'>
               Password
              </label>
              <input type='password' className={classes['form-control']} name='password' onChange={passwordHandler} value={password} />
              {
                errorList.password && <div className={classes['alert_text']}>{errorList.password}</div>
              }
              </div>
           
              <div className={classes['form-group']}>
                  <button type='submit' className={classes['btn-primary']}>Login</button>
              </div>
          </form>
          </div>
          
          <div className={classes['modal-footer']}>
              Don't have an account ?
              <span className={classes['login-tab']} onClick={registerHandler}>Register</span>
          </div>
      </div>
    </SignUpModal>
  )
}
