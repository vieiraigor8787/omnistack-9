import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    const [email, setEmail] = useState('')

    async function handleSubmit(event){
      event.preventDefault()
  
      const res = await api.post('/sessions', { email })
      // console.log(res)
      const { _id } = res.data
      console.log(_id)
      //armazenar o id do usuário no meu localstorage
      localStorage.setItem('user', _id)
      //enviar o usuário para rota '/dashboard' depois de logar
      history.push('/dashboard')
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

