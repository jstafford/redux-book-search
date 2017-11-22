// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {fetchBooks, setTopic} from './actions'
import App from './components/App'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

store.dispatch(setTopic('border collies'))
store.dispatch(fetchBooks())

const root = document.getElementById('root')
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root)
  registerServiceWorker()
}
