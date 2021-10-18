import React, { useState } from 'react'

import MainInput from './components/MainInput'
import CheckboxInput from './components/CheckboxInput'

import './App.css'

function App() {
  const [disabled, setDisable] = useState(false)

  const checkboxDisableHandler = (checkboxValue) => {
    // We're getting an old version of the state in checkboxValue here. It's not a huge issue in this particular case because we can reverse the state anyway. But it's a bug to consider
    setDisable((prevValue) => !prevValue)
  }

  return (
    <div className='App'>
      <h1>Input Component devchallenges</h1>
      <MainInput disabled={disabled} />
      <CheckboxInput getCheckboxInfo={checkboxDisableHandler}>Disable</CheckboxInput>
    </div>
  )
}

export default App
