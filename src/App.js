import React, { useState } from 'react'

import MainInput from './components/MainInput'
import CheckboxInput from './components/CheckboxInput'
import Dropdown from './components/Dropdown'
import IconPicker from './components/IconPicker'
import ColorPickerInput from './components/ColorPickerInput'

import './App.css'

function App() {
  const [error, setError] = useState(false)
  const [helperText, setHelperText] = useState(false)
  const [disabled, setDisable] = useState(false)
  const [sizeOption, setSize] = useState('small')
  const [iconLeft, setIconLeft] = useState([])
  const [iconRight, setIconRight] = useState([])
  const [color, setColor] = useState('#ffffff')

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

  const handleColorPicker = (color) => {
    setColor(color)
  }

  return (
    <div className='App'>
      <div className='wrapper'>
        <h1 className='title'>Input Component</h1>
        <MainInput
          error={error}
          helperMessage={helperText}
          iconLeft={iconLeft}
          iconRight={iconRight}
          label='Label'
          color={color}
          disable={disabled}
        />

        <div className='group'>
          <CheckboxInput
            label='error-checkbox'
            value={error}
            onChange={handleErrorChange}
          >
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
        </div>

        <Dropdown
          getOptionPicked={changeOption}
          options={['small', 'medium', 'full-width']}
          type='size'
          size={sizeOption}
        />

        <IconPicker getIconLeft={addIconLeft} getIconRight={addIconRight} />

        <ColorPickerInput getColor={handleColorPicker} color={color} />
      </div>
    </div>
  )
}

export default App
