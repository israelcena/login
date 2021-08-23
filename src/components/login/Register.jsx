import React from 'react'
import Form from './Form'

export function Register(props) {

  return (
    <section className='form-container' ref={props.containerRef}>
      <Form header='Registrar' btnTitle='Registrar'>
        <div className='content-form-group'>
          <label htmlFor='password'>Confirme a Senha: </label>
          <input type='password' name='password' placeholder='Confirmação da senha' />
        </div>
      </Form>
    </section>
  )
}
