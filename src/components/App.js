import React from 'react';
import '../css/style.css';
import '../App.css';
import Data from './Data';
import Home from './Home';
import Header from './Header';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/data" component={ Data }/>
    </Router>
  );
}

export default App;
