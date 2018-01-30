import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar"
import Rankings from "./Rankings"
import HeroStats from "./HeroStats"
import Welcome from "./Welcome"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path= "/rankings" component = {Rankings} />
      <Route path= "/teams" component = {HeroStats} />
    </Switch>
  </BrowserRouter>

)

export default App;