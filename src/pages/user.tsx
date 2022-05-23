import Header from 'components/Header'
import Link from 'next/link'
import * as S from '../styles/styles'

const BookingPage = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.Book>
          <S.Title>O que deseja?</S.Title>
          <Link href="/booking">
            <S.Button>AGENDAR CORTE</S.Button>
          </Link>
          <Link href="/cancel">
            <S.Button>CANCELAR AGENDAMENTO</S.Button>
          </Link>
        </S.Book>
      </S.Wrapper>
    </>
  )
}

export default BookingPage
