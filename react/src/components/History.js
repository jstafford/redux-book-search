// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {undo, redo, gotoState} from '../actions'
import stateHistory from '../statehistory'

class History extends Component<{
  past: Array<Object>,
  present: Object,
  future: Array<Object>,
  undo: () => void,
  redo: () => void,
  gotoState: (Number) => void,
}> {
  render () {
    const {past, present, future, undo, redo, gotoState} = this.props

    const max =
      (past    ? past.length   : 0) +
      (present ? 1 : 0)             +
      (future  ? future.length : 0) - 1

    const value = past ? past.length : 0

    return (
      <span style={{
        marginLeft: '20px',
        cursor: 'pointer',
      }}>
        History

        <input type="range"
          style={{ cursor: 'pointer' }}
          min={0}
          max={max}
          value={value}
          onChange={event => gotoState(event.target.value)} />

        <button onClick={undo}
          disabled={!past || past.length === 0}
        >◀</button>

        <button onClick={redo}
          disabled={!future || future.length === 0}
        >▶</button>
      </span>
    )
  }
}

const mapStateToProps = () => ({
  past: stateHistory.past,
  present: stateHistory.present,
  future: stateHistory.future,
})

const mapDispatchToProps = dispatch => ({
  undo: () => {
    dispatch(undo())
  },

  redo: () => {
    dispatch(redo())
  },

  gotoState: stateIndex => {
    dispatch(gotoState(stateIndex))
  },
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(History)
