// @flow

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import TopNavBar from './components/top-nav-bar.js'
import Home from './components/home.js'
import './css/App.css'
import './css/top-nav-bar.css'

class Blog extends React.Component<{}, {}> {
  render () {
    return (
      <p>Blog</p>
    )
  }
}

class App extends React.Component<{}, {}> {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <TopNavBar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/blog' component={Blog}/>
          </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
