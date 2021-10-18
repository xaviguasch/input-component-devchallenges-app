import React, { useState } from 'react'

const CheckboxInput = (props) => {
  const [checkboxValue, setcheckboxValue] = useState(false)

  const submitHandler = (e) => {
    setcheckboxValue((prevState) => !prevState)

    props.getCheckboxInfo(checkboxValue)
  }

  return (
    <div>
      <label htmlFor='checkbox'>{props.children}</label>
      <input type='checkbox' name='' id='checkbox' onChange={submitHandler} />
      {checkboxValue ? 'true' : 'false'}
    </div>
  )
}

export default CheckboxInput
