import React, { Component } from "react";
import Index from "../pages/index";
import Splash from "../pages/splash";
import Login from "../pages/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../templates/header";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/splash">
            <Splash />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Index />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
