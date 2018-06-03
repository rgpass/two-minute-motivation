import React from 'react'
import { string } from 'prop-types'

const Action = props => {
  const style = {
    margin: 'calc(20vh - 33px) 0 0 0',
    height: '66px',
  }

  const { action } = props

  return (
    <div style={style}>
      <h2>{action}</h2>
    </div>
  )
}

Action.propTypes = {
  action: string.isRequired,
}

export default Action
