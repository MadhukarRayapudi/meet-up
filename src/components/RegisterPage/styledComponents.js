import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  justify-content: center;
`

export const Logo = styled.img`
  height: 60px;
  width: 180px;
  margin: 20px;
`

export const Image = styled.img`
  width: 40%;
  margin-right: 20px;
`

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`

export const Heading = styled.h1`
  font-family: roboto;
  font-size: 40px;
  color: #334155;
`

export const Label = styled.label`
  font-family: roboto;
  font-size: 18px;
  color: #7b8794;
  margin-bottom: 6px;
`

export const Input = styled.input`
  height: 40px;
  width: 60%;
  border: 1px solid #cbd5e1;
  margin-bottom: 20px;
`

export const Select = styled.select`
  height: 40px;
  width: 60%;
  border: 1px solid #cbd5e1;
  margin-bottom: 22px;
`

export const Options = styled.option`
  font-family: roboto;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  height: 40px;
  width: 30%;
  font-family: roboto;
  color: #ffffff;
`

export const ErrorMessage = styled.p`
  font-family: roboto;
  color: #ff0b37;
`
