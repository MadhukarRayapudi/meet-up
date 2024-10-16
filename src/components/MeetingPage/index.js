import {Link} from 'react-router-dom'

import RegisterContext from '../context/RegisterContext'

import Header from '../Header'

import {
  MeetupPage,
  MeetHeading,
  MeetDescription,
  RegisterButton,
  MeetupPageImage,
} from './styledComponents'

const MeetingPage = props => {
  const {history} = props

  const onClickRegister = () => history.push('/register')

  return (
    <RegisterContext.Consumer>
      {value => {
        const {isRegistered, username, activeTopicId} = value

        return (
          <>
            <Header />
            {isRegistered ? (
              <MeetupPage>
                <MeetHeading> Hello {username} </MeetHeading>
                <MeetDescription> Welcome to {activeTopicId} </MeetDescription>
                <MeetupPageImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </MeetupPage>
            ) : (
              <MeetupPage>
                <MeetHeading> Welcome to Meetup </MeetHeading>
                <MeetDescription>Please register for the topic</MeetDescription>
                <Link to="/register">
                  <RegisterButton type="button" onClick={onClickRegister}>
                    Register
                  </RegisterButton>
                </Link>
                <MeetupPageImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </MeetupPage>
            )}
          </>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default MeetingPage
