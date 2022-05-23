import * as S from './styles'

const Book = () => {
  const createMsg = () => {
    const timeSelect = document.querySelector('#time')
    const barberSelect = document.querySelector('#barber')
    const skillSelect = document.querySelector('#skill')

    const div = document.querySelector('.bookingConfirmation')
    const msg = document.createElement('h1')
    const confirm = document.createElement('h1')

    msg.textContent = 'Nosso compromisso foi marcado!'
    confirm.textContent = `${timeSelect.value} - ${barberSelect.value} - ${skillSelect.value}`
    div.append(msg, confirm)
  }
  return (
    <>
      <S.Wrapper>
        <S.Clock />
        <S.Book>
          <S.BookSelection>
            <S.BookSelector name="Horario" id="time">
              <option value="08:00">08:00</option>
              <option value="08:30">08:30</option>
              <option value="09:00">09:00</option>
            </S.BookSelector>
            <S.BookSelector name="Barbeiro" id="barber">
              <option value="Jorge">Jorge</option>
              <option value="Rasta">Rasta</option>
              <option value="Binho">Binho</option>
            </S.BookSelector>
            <S.BookSelector name="Especialidade" id="skill">
              <option value="Tesoura">Tesoura</option>
              <option value="Barba">Barba</option>
              <option value="Sobrancelha">Sobrancelha</option>
            </S.BookSelector>
          </S.BookSelection>
          <div>
            <S.Button
              className="btn"
              onClick={(e) => {
                const btn = document.querySelector('.btn')
                e.preventDefault()
                btn.style.display = 'none'
                createMsg()
              }}
            >
              AGENDAR
            </S.Button>
            <div className="bookingConfirmation"></div>
          </div>
        </S.Book>
      </S.Wrapper>
    </>
  )
}

export default Book
