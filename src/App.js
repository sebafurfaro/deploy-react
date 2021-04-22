import React from 'react';
import Navbar from '../src/components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route patch="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
