import React from 'react'
import { string } from 'prop-types'

const KeyboardButton = props => {
  const style = {
    padding: '3px 5px',
    fontSize: '10px',
    boxShadow: 'grey 0px 2px 2px',
  }

  const { content } = props

  return (
    <span className="badge badge-secondary" style={style}>
      {content}
    </span>
  )
}

KeyboardButton.propTypes = {
  content: string.isRequired,
}

export default KeyboardButton
