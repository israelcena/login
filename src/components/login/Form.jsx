import React from 'react'
import loginImg from '../../../login.svg'

export default function Form(props) {
  return (
    <>
      <div className='header'>{props.header}</div>
      <main className='content'>
        <div className='content-image'>
          <img className='content-image-element' src={loginImg} alt='login-image' />
        </div>
        <form className='content-form'>
          <div className='content-form-group'>
            <label htmlFor='username'>Usuário: </label>
            <input type='text' name='username' placeholder='Digite seu usuário' autoFocus />
          </div>
          <div className='content-form-group'>
            <label htmlFor='password'>Senha: </label>
            <input type='password' name='password' placeholder='Senha' />
          </div>
          {props.children}
          <div className='content-footer'>
            <button type='button' className='btn'>{props.btnTitle}</button>
          </div>
        </form>
      </main>
    </>
  )
}

