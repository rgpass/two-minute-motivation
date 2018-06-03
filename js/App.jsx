import React, { Component } from 'react'
import Title from './Title'
import Action from './Action'
import NextButton from './NextButton'
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

    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <Title />
            <Action action={action} />
            <NextButton onClick={this.handleNext} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
