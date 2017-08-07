import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Movie from './components/Movie'
import Music from './components/Music'
import Photo from './components/Photo'

class App extends Component {
  render() {
    return (
      <div style={{"height": "100%"}}>
        <Router>
          <Switch>
            <Route exact={true} path={`/`} component={Movie} ></Route>
            <Route exact={true} path={`/movie`} component={Movie} ></Route>
            <Route exact={true} path={`/music`} component={Music} ></Route>
            <Route exact={true} path={`/photo`} component={Photo} ></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
