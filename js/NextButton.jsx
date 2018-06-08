// @flow

import React from 'react'
import KeyboardButton from './KeyboardButton'

const NextButton = (props: { onClick: () => void }) => {
  const style = {
    margin: 'calc(20vh - 33px) 0 0 0',
    color: 'white',
  }

  const { onClick } = props

  let mobileSection
  const isMobile = 'ontouchstart' in window

  if (isMobile) {
    mobileSection = ''
  } else {
    mobileSection = (
      <span>
        &nbsp;&nbsp;(&nbsp;<KeyboardButton content="SPACEBAR" />&nbsp;)
      </span>
    )
  }

  return (
    <button
      className="btn btn-primary btn-block btn-lg"
      style={style}
      onClick={onClick}
    >
      Next{mobileSection}
    </button>
  )
}

export default NextButton
