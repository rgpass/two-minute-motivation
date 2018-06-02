import React, { Component } from 'react'
import data from '../data.json'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      actionIndex: this.randomIndex(),
    }

    this.handleNext = this.handleNext.bind(this)
  }

  handleNext() {
    const newIndex = this.randomIndex()
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

    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <h1 style={h1Style}>Two Minute Motivation</h1>
            <div style={h2WrapperStyle}>
              <h2>{action}</h2>
            </div>
            <a
              className="btn btn-primary btn-block btn-lg"
              style={btnStyle}
              onClick={this.handleNext}
            >
              Next
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default App
