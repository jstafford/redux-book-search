// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import DisplayMode from './DisplayMode'
import History from './History'
import TopicSelector from './TopicSelector'

class Controls extends Component<{
  topic: string,
  displayMode: string,
}> {
  render () {
    const {topic, displayMode} = this.props

    return (
      <div style={{
        padding: '15px',
        marginBottom: '25px',
      }}>
        <TopicSelector topic={topic} />
        <DisplayMode displayMode={displayMode} />
        <History />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  topic: state.topic,
  displayMode: state.displayMode,
})

export default connect(
  mapStateToProps,
  null
)(Controls)
