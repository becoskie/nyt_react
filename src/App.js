import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
      <Route exact path="/" component={Search} />
      <Route exact path="/saved" component={Search} />
      </Wrapper>
    </div>
  </Router>
);

export default App;
