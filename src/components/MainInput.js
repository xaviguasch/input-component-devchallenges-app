import React from 'react'

import './MainInput.css'

const MainInput = (props) => {
  return (
    <div className={`main-input ${props.error ? 'error' : ''}`}>
      <label className='main-input__label' htmlFor=''>
        {props.label}
      </label>
      <span className='material-icons material-icons--left'>
        {props.iconLeft !== 'block' ? props.iconLeft : ''}
      </span>
      <input
        className={props.size}
        type='text'
        style={{ background: props.color }}
        placeholder='Enter text'
        disabled={props.disable}
      />
      <span className='material-icons material-icons--right'>
        {props.iconRight !== 'block' ? props.iconRight : ''}
      </span>
      <span className='additional-text'>
        {props.helperMessage ? 'Some interesting text' : ''}
      </span>
    </div>
  )
}

export default MainInput
