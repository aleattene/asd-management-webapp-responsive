import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import UserNavbar from "./components/user/user-navbar";
import Carousel from "./components/carousel";
import Login from "./components/login";
import Card from "./components/card";
import UserHandleAtletes from "./components/user/user-handle-athtletes";
import UserServices from "./components/user/user-services";
import UserProfile from "./components/user/user-profile";
import OperatorNavbar from "./components/operator/operator-navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container-fluid bg-lightbg-light">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/user" component={UserNavbar} />
          </Switch>
          <Switch>
            <Route
              exact
              path="/user/handle-atletes"
              component={UserHandleAtletes}
            />
          </Switch>
          <Switch>
            <Route exact path="/user/services" component={UserServices} />
          </Switch>
          <Switch>
            <Route exact path="/user/handle-profile" component={UserProfile} />
          </Switch>
          <Switch>
            <Route exact path="/operator" component={OperatorNavbar} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
