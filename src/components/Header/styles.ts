import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.white};
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4em;
  position: fixed;
  top: 0;
`

export const Title = styled.h1`
  font-size: 5em;
  cursor: pointer;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Old Standard TT', serif;
`
export const Hello = styled.p`
  font-size: 4em;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Old Standard TT', serif;
`
