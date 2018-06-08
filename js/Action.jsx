// @flow

import React from 'react'

const Action = (props: { action: string }) => {
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

export default Action
