import React from 'react'
import loginImg from '../../../login.svg'

export function Login(props) {
  return (
    <section className='container' ref={props.containerRef}>
      <header className='header'>Login</header>
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
            <input type='password' name='password' placeholder='Senha'/>
          </div>
        </form>  
      </main>
      <footer className='content-footer'>
        <button type='button' className='btn'>Login</button>
      </footer>
    </section>
  )
}
