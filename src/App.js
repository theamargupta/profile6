import React from 'react';
import { Route } from 'react-router-dom';
//  Component
import Homepage from './Pages/Homepage';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/projects' component={Projects} />
    </div>
  );
}

export default App;
