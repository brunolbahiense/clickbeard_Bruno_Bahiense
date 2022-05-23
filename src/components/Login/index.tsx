import React, { useState } from 'react'
/* import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice' */
import * as S from './styles'
import Link from 'next/link'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  /*
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      login({
        name,
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
          type="name"
          placeholder="Usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Link href="/user">
          <S.Button type="submit">ENTRAR</S.Button>
        </Link>
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
