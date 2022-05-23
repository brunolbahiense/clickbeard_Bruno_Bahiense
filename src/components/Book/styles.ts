import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${(props) => props.theme.silver};
  color: ${(props) => props.theme.main};
  width: 100vw;
  height: 100vh;
  padding: 3rem;
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    border: none;
    box-shadow: none;
    width: auto;
    height: auto;
  }
`
export const Clock = styled.div`
  background-image: url('/img/clock.png');
  background-size: cover;
  height: 50em;
  width: 50em;
  margin-right: 4em;
  border-radius: 12px;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`

export const Book = styled.div`
  background-color: ${(props) => props.theme.white};
  height: 50em;
  width: 70em;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`

export const BookSelection = styled.div`
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const BookSelector = styled.select`
  border: solid 2px ${(props) => props.theme.main};
  width: 10em;
  padding: 1em;
  margin: 0 2em;
  margin-bottom: 4em;
`
export const Button = styled.button`
  padding: 17px 30px;
  margin-top: 30px;
  background-color: ${(props) => props.theme.main};
  border: none;
  color: white;
  font-size: 24px;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Old Standard TT', serif;
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.theme.mainLight};
  }
`
