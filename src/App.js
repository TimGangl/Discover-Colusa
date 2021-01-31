import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import BusinessPage from './pages/BusinessPage/BusinessPage';
import UnderConstruction from './pages/404UnderConstruction/404PageUnderConstruction';
import BlogSpot from './pages/BlogSpot/BlogSpot';
import BlogSingle from './pages/BlogSingle/BlogSingle';
import Press from './pages/Press/Press';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={['/']} component={Home}>
            <Home />
          </Route>
          <Route exact path={['/business']} component={BusinessPage}>
            <BusinessPage />
          </Route>
          <Route exact path={['/history']} component={UnderConstruction}>
            <UnderConstruction />
          </Route>
          <Route exact path={['/art']} component={UnderConstruction}>
            <UnderConstruction />
          </Route>
          <Route exact path={['/events']} component={Events}>
            <Events />
          </Route>
          <Route exact path={['/river']} component={UnderConstruction}>
            <UnderConstruction />
          </Route>
          <Route exact path={['/blogspot']} component={BlogSpot}>
            <BlogSpot />
          </Route>
          <Route exact path={['/blog']} component={BlogSingle}>
            <BlogSingle />
          </Route>
          <Route exact path={['/press']} component={Press}>
            <Press />
          </Route>
          <Route exact path={['/maps']} component={UnderConstruction}>
            <UnderConstruction />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
