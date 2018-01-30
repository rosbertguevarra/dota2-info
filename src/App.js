import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LiveGames from "./LiveGames"
import HeroStats from "./HeroStats"
import Welcome from "./Welcome"

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path= "/live-games" component = {LiveGames} />
      <Route path= "/heroes" component = {HeroStats} />
    </Switch>
  </BrowserRouter>

)

export default App;