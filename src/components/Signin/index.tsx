import React, { useState } from 'react'
import * as S from './styles'
import Link from 'next/link'

const Signin = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <S.Signin>
      <S.SigninForm>
        <S.Title>CADASTRO</S.Title>
        <S.Input
          type="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <S.Button type="submit">CADASTRAR</S.Button>
        <S.Login>
          Já possui cadastro? Retorne
          <Link href="/">
            <S.Anchor> aqui</S.Anchor>
          </Link>
        </S.Login>
      </S.SigninForm>
    </S.Signin>
  )
}

export default Signin
