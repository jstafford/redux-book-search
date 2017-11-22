// @flow
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Book from './Book.js'
import Spinner from './Spinner'

class Books extends Component<{
  books: Array<Object>,
  displayMode: string,
  isFetching: bool,
}> {

  render () {
    const {books, displayMode, isFetching} = this.props

    return (
      <div>
        {isFetching ?  <Spinner /> : null}

        <div style={{
          width: '100%',
        }}>
          <TransitionGroup>
            {books.map(book => {
                // Need different keys for different display modes
                // to trigger <CSSTransition> animations
                return (
                  <CSSTransition
                    key={displayMode === 'THUMBNAIL' ?
                           book.id + 'thumb' :
                           book.id}
                    classNames="books"
                    timeout={{enter: 1000, exit: 1}}
                  >
                    <Book item={book} displayMode={displayMode}/>
                  </CSSTransition>
                )
            })}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books:         state.books,
  displayMode:   state.displayMode,
  isFetching:    state.currentStatus === 'Fetching...',
})

export default connect(
  mapStateToProps,
  null
)(Books)
