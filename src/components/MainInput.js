import React from 'react'

import './MainInput.css'

const MainInput = (props) => {
  return (
    <div className={`main-input ${props.error ? 'error' : ''}`}>
      <label htmlFor=''>{props.label}</label>
      <span className='material-icons'>
        {props.iconLeft !== 'block' ? props.iconLeft : ''}
      </span>
      <input type='text' />
      <span className='material-icons'>
        {props.iconRight !== 'block' ? props.iconRight : ''}
      </span>
      <span className='additional-text'>
        {props.helperMessage ? 'Some interesting text' : ''}
      </span>
    </div>
  )
}

export default MainInput
