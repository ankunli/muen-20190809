import React, { Component } from 'react'
import Routes from './router/index'
import {Provider} from 'react-redux'
import store from './store'
export default class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
          <Routes/>
      </Provider>
      
      </>
    )
  }
}
