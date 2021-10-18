import React, { useState } from 'react'

import MainInput from './components/MainInput'
import CheckboxInput from './components/CheckboxInput'

import './App.css'

function App() {
  const [error, setError] = useState(false)

  const handleErrorChangeOne = (checkboxValue) => {
    setError((prevState) => !prevState)
  }

  return (
    <div className='app'>
      <MainInput error={error} label='Label' />
      <CheckboxInput label='error-checkbox' value={error} onChange={handleErrorChangeOne}>
        Disable
      </CheckboxInput>
    </div>
  )
}

export default App
