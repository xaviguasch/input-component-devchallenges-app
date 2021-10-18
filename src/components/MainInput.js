import React from 'react'

import './MainInput.css'

const MainInput = (props) => {
  return (
    <div className={`main-input ${props.error ? 'error' : ''}`}>
      <label htmlFor=''>{props.label}</label>
      <input type='text' />
    </div>
  )
}

export default MainInput
