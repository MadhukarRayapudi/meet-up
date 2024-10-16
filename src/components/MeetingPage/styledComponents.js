import styled from 'styled-components'

export const MeetupPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
`

export const MeetHeading = styled.h1`
  font-family: roboto;
  font-size: 40px;
  color: #334155;
`

export const MeetDescription = styled.p`
  font-family: roboto;
  font-size: 22px;
  color: #475569;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  font-family: roboto;
  color: #ffffff;
`

export const MeetupPageImage = styled.img`
  height: 600px;
  width: 80%;
`
