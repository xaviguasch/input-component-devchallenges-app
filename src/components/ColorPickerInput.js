import React from 'react'

const ColorPickerInput = (props) => {
  const valueListener = (e) => {
    props.getColor(e.target.value)
  }

  return (
    <div>
      Color picker
      <input type='color' onChange={valueListener} value={props.color} />
    </div>
  )
}

export default ColorPickerInput
