import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
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

export const HeroDiv = styled.div`
  background-image: url('/img/hero-img.png');
  height: 100%;
  width: 60vw;
`

export const Title = styled.h1`
  font-size: 6em;
  margin-top: 6em;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Old Standard TT', serif;
  color: ${(props) => props.theme.white};
`
