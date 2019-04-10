import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
<div>
<Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutme" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="https://docs.google.com/document/d/1fTQ-EM9co5IWiGa0s_ChO-lDLdqlAGwP9nxbJClCpq4/edit?usp=sharing" />
          </div>
        </Router>
</div>
    );
  }
}

export default App;
