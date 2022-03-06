import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GlobalStyles from './GlobalStyles'
import { Home } from './Home'
import { Game } from './Game'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/game'>
          <Game />
        </Route>
      </Router>
    </>
  )
}
