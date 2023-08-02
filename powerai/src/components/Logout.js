import React from 'react'
import Login from './login';

export const Logout = () => {
    const Signout=()=>{
        localStorage.setItem('token',null);
    }
  return (
    <div><button onClick={Signout}>Logout</button>{localStorage.getItem('token')?<h1>d</h1>:<Login/>}</div>
    
  )
}
