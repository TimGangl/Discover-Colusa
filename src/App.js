import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={['/']} component={Home}>
            <Home />
          </Route>
          <Route exact path={['/events']} component={Events}>
            <Events />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
