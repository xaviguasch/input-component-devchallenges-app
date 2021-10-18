import React, { useState } from 'react'

import MainInput from './components/MainInput'
import CheckboxInput from './components/CheckboxInput'

import './App.css'

function App() {
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState(false)

  const handleErrorChange = (checkboxValue) => {
    setError((prevState) => !prevState)
  }
  const handleHelperText = (checkboxValue) => {
    setHelperText((prevState) => !prevState)
  }

  return (
    <div className='app'>
      <MainInput error={error} helperMessage={helperText} label='Label' />
      <CheckboxInput label='error-checkbox' value={error} onChange={handleErrorChange}>
        Disable
      </CheckboxInput>
      <CheckboxInput
        label='helper-text-checkbox'
        value={helperText}
        onChange={handleHelperText}
      >
        Disable
      </CheckboxInput>
    </div>
  )
}

export default App
