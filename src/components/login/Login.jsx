import React from 'react'
import Form from './Form';

export function Login(props) {
  return (
    <section className='container' ref={props.containerRef}>
      <Form header='Logar' btnTitle='Logar'/>
    </section>
  )
}
