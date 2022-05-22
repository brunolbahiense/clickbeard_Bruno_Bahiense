import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.gray};
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    border: none;
    box-shadow: none;
    width: auto;
    height: auto;
  }
`
export const Box = styled.div`
  background-color: ${(props) => props.theme.grayD};
  padding: 3rem;
  border-radius: 15px;
`

export const ClickWrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
export const BoxWrapper = styled.div`
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-size: 4em;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Old Standard TT', serif;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: ${(props) => props.theme.pink};
`
export const Click = styled.button`
  color: ${(props) => props.theme.gray};
  font-size: 2rem;
  font-weight: 400;
  padding: 1.5rem;
  border-radius: 15px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.pink};
  }

  svg {
    background-color: transparent;
    margin-right: 1rem;
  }
`

export const Illustration = styled.img`
  margin-top: 15em;
  width: min(30rem, 100%);
`
