// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setDisplayMode} from '../actions'

class DisplayMode extends Component<{
  displayMode: string,
  switchToListing: () => void,
  switchToThumbnail: () => void,
}> {
  render () {
    const {displayMode, switchToListing, switchToThumbnail} = this.props

    const radioStyle = {
      marginLeft: '10px',
      cursor: 'pointer',
    }

    const labelStyle = {
      marginLeft: '20px',
      fontSize: '16px',
    }

    return (
      <span>
        <span style={labelStyle}>
          Thumbnail
        </span>

        <input type="radio"
          name="display"
          style={radioStyle}
          onChange={switchToThumbnail}
          checked={displayMode === 'THUMBNAIL'}
          value="thumbnail" />

        <span style={labelStyle}>
          List
        </span>

        <input type="radio"
          name="display"
          style={radioStyle}
          onChange={switchToListing}
          checked={displayMode !== 'THUMBNAIL'}
          value="list" />
      </span>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  switchToListing: () => {
    dispatch(setDisplayMode('LISTING'))
  },

  switchToThumbnail: () => {
    dispatch(setDisplayMode('THUMBNAIL'))
  },
})

export default connect(
  null,
  mapDispatchToProps
)(DisplayMode)
