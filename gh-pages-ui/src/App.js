// @flow

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import vtLogo from './components/static/virginia_tech_football.png'
import TopNavBar from './components/top-nav-bar.js'
import './css/App.css'
import './components/top-nav-bar.css'

class Home extends React.Component<{}, {}> {
  render () {
    return (
      <p className="App-intro">
        <img src={vtLogo} />
      </p>
    )
  }
}

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
