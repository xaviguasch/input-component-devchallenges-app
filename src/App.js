import React, { useState } from 'react'

import MainInput from './components/MainInput'
import CheckboxInput from './components/CheckboxInput'

import './App.css'

function App() {
  const [error, setError] = useState(false)

  const checkboxDisableHandler = (checkboxValue) => {
    setError(checkboxValue)
  }

  return (
    <div className='app'>
      <MainInput error={error} label='Label' />
      <CheckboxInput getCheckboxInfo={checkboxDisableHandler}>Disable</CheckboxInput>
    </div>
  )
}

export default App
