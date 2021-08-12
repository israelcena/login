import React from 'react'
import loginImg from '../../../login.svg'

export default function Login(props) {
  return (
    <div className='container'>
      <div className='header'>Login</div>
      <div className='Content'>
        <div className='image'>
          <img src={loginImg} />
        </div>
        <div className='form'>
          <div className='form-group'>
            <label htmlFor='username'>Username: </label>
            <input type='text' name='username' placeholder='username'/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>password: </label>
            <input type='password' name='password' placeholder='password'/>
          </div>
        </div>  
      </div>
      <div className='footer'>
        <button type='button' className='btn'>Login</button>
      </div>
    </div>
  )
}
