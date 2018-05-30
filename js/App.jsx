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

    return (
      <div>
        <h1>Two Minute Motivation</h1>
        <h2>{action}</h2>
        <button onClick={this.handleNext}>Next</button>
      </div>
    )
  }
}

export default App
