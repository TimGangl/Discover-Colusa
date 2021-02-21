import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import BusinessPage from './pages/BusinessPage/BusinessPage';
import UnderConstruction from './pages/404UnderConstruction/404PageUnderConstruction';
import BlogArticleList from './pages/BlogArticleList/BlogArticleList';
import BlogArticle from './pages/BlogArticle/BlogArticle';
import Press from './pages/Press/Press';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';



function App() {

  
  return (
    <>
      <Router>
        <ScrollToTop />
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
          <Route exact path={['/blog-articles']} component={BlogArticleList}>
            <BlogArticleList />
          </Route>
          <Route exact path={['/blog-article']} component={BlogArticle}>
            <BlogArticle />
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
