import React from 'react'

import loginImg from '../../../login.svg'

export function Login(props) {
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
            <input type='text' name='username' placeholder='Digite seu usuário' autoFocus />
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Senha: </label>
            <input type='password' name='password' placeholder='Senha'/>
          </div>
        </form>  
      </div>
      <footer className='footer'>
        <button type='button' className='btn'>Login</button>
      </footer>
    </div>
  )
}
