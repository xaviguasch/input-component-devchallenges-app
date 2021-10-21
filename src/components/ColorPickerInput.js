import React from 'react'

import './ColorPickerInput.css'

const ColorPickerInput = (props) => {
  const valueListener = (e) => {
    props.getColor(e.target.value)
  }

  return (
    <div className='color-picker-input'>
      <label className='item-label' htmlFor={props.label}>
        Color Picker
      </label>
      <input id={props.label} type='color' onChange={valueListener} value={props.color} />
    </div>
  )
}

export default ColorPickerInput
