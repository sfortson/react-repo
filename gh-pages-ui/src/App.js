// @flow

import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import TopNavBar from './components/top-nav-bar.js'
import Home from './components/home.js'
import About from './components/about.js'
import Footer from './components/footer.js'
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
      <HashRouter basename='/'>
        <div className="App">
          <TopNavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/blog' component={Blog} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    )
  }
}

export default App
