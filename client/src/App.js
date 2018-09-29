import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import "./App.css";

const App = () => (
  
  <Router>
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Saved} />
      </Switch>
    </div>
  </Router>
);

export default App;