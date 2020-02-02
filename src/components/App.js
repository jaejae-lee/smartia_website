import React from 'react';
import '../css/style.css';
import '../App.css';
import Data from './Data';
import Home from './Home';
import Header from './Header';
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter basename="/">
      <Header/>
      <Route exact path="/" component={ Home }/>
      <Route path="/data" component={ Data }/>
    </HashRouter>
    </>
  );
}

export default App;
