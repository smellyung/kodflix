import React from 'react';
import Gallery from './Gallery';
import Details from './Details';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Gallery}/>
          <Route exact path="/:id" component={Details}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
