import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

import TripleTriad from './components/tripleTriad';
import DungeonsGuide from './components/dungeonsGuide';

function App() {
  return (
    <div className="App">

      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Dungeons Guide</Link>
            </li>
            <li>
              <Link to="/tripletriad">TripleTriad</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/tripletriad">
            <TripleTriad />
          </Route>
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
