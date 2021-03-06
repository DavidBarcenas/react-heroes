import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import '../global.css'

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="main__views">
        <Switch>
          <Route exact path="/marvel" component={ MarvelScreen } />
          <Route exact path="/dc" component={ DcScreen } />
          <Route exact path="/hero/:id" component={ HeroScreen } />
          <Route exact path="/search" component={ SearchScreen } />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  )
}
