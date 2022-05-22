import React, { useState } from 'react'
/* import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice' */
import * as S from './styles'
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  /*
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      login({
        name,
        email,
        password,
        loggedIn: true
      })
    )
  } */

  return (
    <S.Login>
      <S.LoginForm /* onSubmit={(e) => handleSubmit(e)} */>
        <S.Title>LOGIN</S.Title>
        <S.Input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <S.Button type="submit">ENTRAR</S.Button>
        <S.Signin>
          cadastre-se
          <Link href="/signin">
            <S.Anchor> aqui</S.Anchor>
          </Link>
        </S.Signin>
      </S.LoginForm>
    </S.Login>
  )
}

export default Login
