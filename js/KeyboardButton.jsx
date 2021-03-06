// @flow

import React from 'react'

const KeyboardButton = (props: { content: string }) => {
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

export default KeyboardButton
