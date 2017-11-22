// @flow
import React, {Component} from 'react'
import spinner_image from '../images/spinner.gif'

class Spinner extends Component<{}> {
  render () {
    return (
      <div style={{
        textAlign: 'center',
        width: '100%',
      }}>
        <img src={spinner_image}
          alt="loading..." />
      </div>
    )
  }
}

export default Spinner
