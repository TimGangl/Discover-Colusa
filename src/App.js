import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={['/']}>
            <Home />
          </Route>
          <Route exact path={['/events']}>
            <Events />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
