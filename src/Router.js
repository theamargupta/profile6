import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
//  Component
const Homepage = lazy(() => import('./Container/Homepage'));
const Projects = lazy(() => import('./Container/Projects'));

function AppRouter() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </div>
  );
}

export default AppRouter;
