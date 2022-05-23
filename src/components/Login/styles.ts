import styled from 'styled-components'

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 40vw;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Old Standard TT', serif;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const Title = styled.h1`
  font-size: 5em;
  margin-bottom: 15px;
  padding-bottom: 10px;
  letter-spacing: -1px;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Old Standard TT', serif;
  color: ${(props) => props.theme.main};
`
export const Input = styled.input`
  min-width: 380px;
  padding: 20px 0;
  padding-left: 15px;
  margin-bottom: 30px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.24);
  border-radius: 2px;
  font-size: 15px;
  border: none;
  border-bottom: solid 2px ${(props) => props.theme.main};
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
export const Signin = styled.p`
  text-decoration: none;
  padding: 17px 30px;
  margin-top: 30px;
  color: ${(props) => props.theme.gray};
  border: none;
  font-size: 24px;
  font-family: 'Ibarra Real Nova', serif;
  font-family: 'Old Standard TT', serif;
`
export const Anchor = styled.span`
  color: ${(props) => props.theme.main};
  font-weight: 700;
  cursor: pointer;
`
