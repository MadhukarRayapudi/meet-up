import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import RegisterContext from './components/context/RegisterContext'

import RegisterPage from './components/RegisterPage'

import MeetingPage from './components/MeetingPage'

import NotFound from './components/NotFound'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
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

// Replace your code here
class App extends Component {
  state = {
    username: '',
    activeTopicId: topicsList[0].displayText,
    showErrorMsg: false,
    isRegistered: false,
  }

  onRegistrationSuccess = () => {
    this.setState({showErrorMsg: false, isRegistered: true})
  }

  onRegistrationFailure = () => {
    this.setState({showErrorMsg: true})
  }

  onChangeUserName = userName => {
    this.setState({username: userName})
  }

  onChangeTopicSelector = activeTopicId => {
    this.setState({activeTopicId})
  }

  render() {
    const {username, activeTopicId, showErrorMsg, isRegistered} = this.state
    return (
      <RegisterContext.Provider
        value={{
          username,
          activeTopicId,
          showErrorMsg,
          isRegistered,
          onChangeUserName: this.onChangeUserName,
          onChangeTopicSelector: this.onChangeTopicSelector,
          onRegistrationSuccess: this.onRegistrationSuccess,
          onRegistrationFailure: this.onRegistrationFailure,
        }}
      >
        <Switch>
          <Route exact path="/" component={MeetingPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
