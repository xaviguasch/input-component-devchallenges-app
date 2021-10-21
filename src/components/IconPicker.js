import IconButton from './IconButton'

import './IconPicker.css'

const IconPicker = (props) => {
  const iPCHandlerLeft = (icon) => {
    props.getIconLeft(icon)
  }
  const iPCHandlerRight = (icon) => {
    props.getIconRight(icon)
  }

  return (
    <div className='icon-picker-container'>
      <div className='col'>
        <p className='item-label'>Icon Left</p>
        <IconButton pickIcon={iPCHandlerLeft} icon='home' />
        <IconButton pickIcon={iPCHandlerLeft} icon='account_circle' />
        <IconButton pickIcon={iPCHandlerLeft} icon='thumb_up' />
        <IconButton pickIcon={iPCHandlerLeft} icon='star' />
        <IconButton pickIcon={iPCHandlerLeft} icon='block' color='red' />
      </div>

      <div className='col'>
        <p className='item-label'>Icon Right</p>
        <IconButton pickIcon={iPCHandlerRight} icon='done' />
        <IconButton pickIcon={iPCHandlerRight} icon='favorite' />
        <IconButton pickIcon={iPCHandlerRight} icon='code' />
        <IconButton pickIcon={iPCHandlerRight} icon='pending' />
        <IconButton pickIcon={iPCHandlerRight} icon='block' color='red' />
      </div>
    </div>
  )
}

export default IconPicker
