import * as S from './styles'

const Book = () => {
  const createMsg = () => {
    const msg = document.querySelector('#msg')
    msg.textContent = 'Nosso compromisso foi CANCELADO!'
  }
  return (
    <>
      <S.Wrapper>
        <S.Clock />
        <S.Book>
          <div>
            <h1 id="msg">08:00 - Jorge - Barba</h1>
          </div>
          <S.Button
            className="btn"
            onClick={(e) => {
              const btn = document.querySelector('.btn')
              e.preventDefault()
              btn.style.display = 'none'
              createMsg()
            }}
          >
            CANCELAR
          </S.Button>
          <div className="bookingConfirmation"></div>
        </S.Book>
      </S.Wrapper>
    </>
  )
}

export default Book
