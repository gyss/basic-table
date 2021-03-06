import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import 'react-virtualized/styles.css'

import App from './App'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (noop) => noop,
  ),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
