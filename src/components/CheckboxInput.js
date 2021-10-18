import React, { useState, useEffect } from 'react'

const CheckboxInput = (props) => {
  const [checkboxValue, setcheckboxValue] = useState(false)

  const submitHandler = (e) => {
    setcheckboxValue((prevState) => !prevState)
  }

  // Applying useEffect in order to send an updated version of the state
  useEffect(() => {
    props.getCheckboxInfo(checkboxValue)
  }, [checkboxValue])

  return (
    <div className='checkbox-input'>
      <input type='checkbox' name='' id='checkbox' onChange={submitHandler} />
      <label htmlFor='checkbox'>{props.children}</label>
    </div>
  )
}

export default CheckboxInput
