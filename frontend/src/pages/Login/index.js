import React, { useState } from 'react';
import api from '../../services/api'

export default function Login() {
    const [email, setEmail] = useState('')

    async function handleSubmit(event){
      event.preventDefault()
  
      const res = await api.post('/sessions', { email })
      // console.log(res)
      const { _id } = res.data
      console.log(_id)
      //armazenar o id do usuário no meu localstorage
      localStorage.setItem('user', _id)
    }

    return (
      <>
        <p>
          Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para suporte.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
          id="email"
          type="email" 
          placeholder="Seu e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </>
    )
}

