// @noflow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setTopic, fetchBooks} from '../actions'

class TopicSelector extends Component<{
  topic: string,
  setTopic: (string) => void,
  fetchTopic: (string) => void,
}> {
  input:?HTMLInputElement = null

  putCursorAtEnd(input:HTMLInputElement) {
    const value = input.value
    input.value = ''
    input.value = value
  }

  componentDidMount() {
    if (this.input) {
      this.input.focus()
      this.putCursorAtEnd(this.input)
    }
  }

  handleChange = (event) => {
    this.props.setTopic(event.target.value)
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.fetchTopic(event.target.value)
    }
  }

  render() {
    const topic = this.props.topic

    return (
      <span>
        <span style={{
          marginRight: '10px',
          fontSize: '18px',
        }}>
          Topic
        </span>

        <input type="text"
          ref={(el)=>{this.input=el}}
          style={{
            fontSize: '16px',
            marginRight: '10px',
          }}
          value={topic}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </span>
    )
  }
}

const mapStateToProps = state => ({
  topic: state.topic,
})

const mapDispatchToProps = dispatch => ({
  setTopic: topic => {
    dispatch(setTopic(topic))
  },

  fetchTopic: topic => {
    dispatch(setTopic(topic))
    dispatch(fetchBooks())
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicSelector)
