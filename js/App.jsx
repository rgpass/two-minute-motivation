// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Title from './Title'
import Action from './Action'
import NextButton from './NextButton'
import { updateAction } from './actionCreators'

class App extends Component<{ action: string, handleNext: () => void }, {}> {
  componentDidMount() {
    // Flow claims that document does not have onkeyup but it does
    // $FlowFixMe
    document.onkeyup = this.props.handleNext
  }

  render() {
    const { action, handleNext } = this.props

    return (
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-6">
            <Title />
            <Action action={action} />
            <NextButton onClick={handleNext} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ action: state.action })
const mapDispatchToProps = dispatch => ({
  handleNext() {
    dispatch(updateAction())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
