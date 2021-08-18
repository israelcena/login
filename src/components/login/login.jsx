import React from 'react'

import loginImg from '../../../login.svg'

export default function Login(props) {
  return (
    <div className='container'>
      <div className='header'>Login</div>
      <div className='content'>
        <div className='content-image-box'>
          <img className='content-image-element' src={loginImg} alt='login-image' />
        </div>
        <form className='form'>
          <div className='form-group'>
            <label htmlFor='username'>Usuário: </label>
            <input type='text' name='username' placeholder='Digite seu usuário'/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' placeholder='password'/>
          </div>
        </form>  
      </div>
      <footer className='footer'>
        <button type='button' className='btn'>Login</button>
      </footer>
    </div>
  )
}
