// @flow
import React, {Component} from 'react'
import Books from './Books'
import Controls from './Controls'
import StateViewer from './StateViewer'
import Title from './Title'
import './book.css'

export default class App extends Component<{}> {
  render () {
    return (
      <div>
        <Title />
        <hr />
        <Controls />
        <Books />
        <StateViewer />
      </div>
    )
  }
}
