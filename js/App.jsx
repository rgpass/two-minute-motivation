import React, { Component } from 'react'
import KeyboardButton from './KeyboardButton'
import data from '../data.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      actionIndex: this.randomIndex(),
    }

    this.handleNext = this.handleNext.bind(this)
  }

  componentDidMount() {
    document.onkeyup = this.handleNext
  }

  handleNext() {
    const oldIndex = this.state.actionIndex
    let newIndex = this.randomIndex()

    // Prevent the same one from showing up twice in a row
    while (oldIndex == newIndex) {
      newIndex = this.randomIndex()
    }

    this.setState({ actionIndex: newIndex })
  }

  // eslint-disable-next-line class-methods-use-this
  randomIndex() {
    return Math.floor(Math.random() * data.actions.length)
  }

  render() {
    const { actionIndex } = this.state
    const action = data.actions[actionIndex].title

    const h1Style = {
      margin: '20vh 0 0 0',
    }

    const h2WrapperStyle = {
      margin: 'calc(20vh - 33px) 0 0 0',
      height: '66px',
    }

    const btnStyle = {
      margin: 'calc(20vh - 33px) 0 0 0',
      color: 'white',
    }

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
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <h1 style={h1Style}>Two Minute Motivation</h1>
            <div style={h2WrapperStyle}>
              <h2>{action}</h2>
            </div>
            <button
              className="btn btn-primary btn-block btn-lg"
              style={btnStyle}
              onClick={this.handleNext}
            >
              Next{mobileSection}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
