// @noflow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import stateHistory from '../statehistory'

class StateViewer extends Component<{
  topic: string,
  books: Array<Object>,
  currentStatus: string,
  displayMode: string,
  history: StateHistory,
}> {
  render () {
    const {topic, books, currentStatus, displayMode, history} = this.props

    return (
      <div style={{
        margin: '20px',
        width: '400px',
      }}>
        <hr style={{
          marginTop: '50px',
        }} />

        <div style={{
          fontSize: '24px',
          marginTop: '25px',
        }}>
          Application State
        </div>

        <div style={{
          marginTop: '10px',
        }}>
          Topic: {topic}<br />

          Display mode:      { displayMode }<br />
          Current status:    { currentStatus }<br />
          Books displayed:   { books.length }<br />
          Actions processed: { history.past.length + history.future.length + 1 }<br />
          Current action:    { history.past.length + 1 }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books:         state.books,
  topic:         state.topic,
  currentStatus: state.currentStatus,
  displayMode:   state.displayMode,
  history:       stateHistory,
})

export default connect(
  mapStateToProps,
  null
)(StateViewer)
