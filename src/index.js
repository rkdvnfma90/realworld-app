import ReactDOM from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import App from './App'
import { Provider } from 'react-redux'

const initialState = { appName: 'abworld', articles: null, checked: false }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return { ...state, checked: !state.checked }
  }
  return state
}

const store = createStore(reducer)

store.subscribe(() => {
  console.log(store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
