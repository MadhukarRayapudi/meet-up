import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  onChangeUserName: () => {},
  onChangeTopicSelector: () => {},
  onSubmitForm: () => {},
})

export default RegisterContext
