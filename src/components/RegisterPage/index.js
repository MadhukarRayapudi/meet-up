import RegisterContext from '../context/RegisterContext'

import Header from '../Header'

import {
  LoginPageContainer,
  Image,
  InputContainer,
  Heading,
  Label,
  Input,
  Select,
  Options,
  RegisterButton,
  ErrorMessage,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterPage = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        username,
        activeTopicId,
        showErrorMsg,
        onChangeUserName,
        onChangeTopicSelector,
        onRegistrationSuccess,
        onRegistrationFailure,
      } = value
      const onChangeUsernameInput = event => {
        onChangeUserName(event.target.value)
      }

      const onChangeSelect = event => {
        onChangeTopicSelector(event.target.value)
      }

      const onSubmitForm = event => {
        event.preventDefault()

        if (username !== '') {
          const {history} = props
          history.replace('/')
          onRegistrationSuccess()
        } else {
          onRegistrationFailure()
        }
      }

      return (
        <>
          <Header />
          <LoginPageContainer onSubmit={onSubmitForm}>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
              alt="website register"
            />
            <InputContainer>
              <Heading> Let us join </Heading>
              <Label htmlFor="NameInput"> NAME </Label>
              <Input
                type="text"
                id="NameInput"
                placeholder="Your name"
                onChange={onChangeUsernameInput}
                value={username}
              />
              <Label htmlFor="SelectTopic"> TOPICS </Label>
              <Select
                id="SelectTopic"
                onChange={onChangeSelect}
                value={activeTopicId}
              >
                {topicsList.map(eachTopic => (
                  <Options value={eachTopic.id} key={eachTopic.id}>
                    {eachTopic.displayText}
                  </Options>
                ))}
              </Select>
              <RegisterButton type="submit">Register Now</RegisterButton>
              {showErrorMsg && (
                <ErrorMessage> Please enter your name </ErrorMessage>
              )}
            </InputContainer>
          </LoginPageContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterPage
