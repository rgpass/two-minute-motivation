import React from 'react'
import { func } from 'prop-types'
import KeyboardButton from './KeyboardButton'

const NextButton = props => {
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

NextButton.propTypes = {
  onClick: func.isRequired,
}

export default NextButton
