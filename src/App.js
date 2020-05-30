import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import DungeonsGuide from './components/dungeonsGuide';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/">
            <DungeonsGuide/>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
