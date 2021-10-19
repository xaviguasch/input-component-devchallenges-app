import React, { useState } from 'react'

import MainInput from './components/MainInput'
import CheckboxInput from './components/CheckboxInput'
import Dropdown from './components/Dropdown'
import IconPicker from './components/IconPicker'

import './App.css'

function App() {
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState(false)
  const [disabled, setDisable] = useState(false)
  const [sizeOption, setSize] = useState('small')
  const [iconLeft, setIconLeft] = useState([])
  const [iconRight, setIconRight] = useState([])

  const handleErrorChange = (checkboxValue) => {
    setError((prevState) => !prevState)
  }
  const handleHelperText = (checkboxValue) => {
    setHelperText((prevState) => !prevState)
  }
  const handleDisableText = (checkboxValue) => {
    setDisable((prevState) => !prevState)
  }

  const changeOption = (option) => {
    setSize(option)
  }

  const addIconLeft = (icon) => {
    setIconLeft(icon)
  }
  const addIconRight = (icon) => {
    setIconRight(icon)
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <MainInput
          error={error}
          helperMessage={helperText}
          iconLeft={iconLeft}
          iconRight={iconRight}
          label='Label'
        />
        <CheckboxInput label='error-checkbox' value={error} onChange={handleErrorChange}>
          Error state
        </CheckboxInput>
        <CheckboxInput
          label='helper-text-checkbox'
          value={helperText}
          onChange={handleHelperText}
        >
          Helper text
        </CheckboxInput>
        <CheckboxInput
          label='disable-checkbox'
          value={disabled}
          onChange={handleDisableText}
        >
          Disable option
        </CheckboxInput>
        <Dropdown
          getOptionPicked={changeOption}
          options={['small', 'medium', 'full-width']}
          type='size'
          size={sizeOption}
        />

        <IconPicker getIconLeft={addIconLeft} getIconRight={addIconRight} />
      </div>
    </div>
  )
}

export default App
