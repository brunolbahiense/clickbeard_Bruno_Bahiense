import Link from 'next/link'
import * as S from './styles'

// transformar o nome dinamicamente
const Header = () => (
  <S.Header>
    <Link href="/user">
      <S.Title>CLICKBEARD</S.Title>
    </Link>
    <S.Hello>
      Seja Bem vindo <span> Bruno</span>
    </S.Hello>
  </S.Header>
)

export default Header
