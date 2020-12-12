import React from 'react';
import { Route } from 'react-router-dom';
//  Component
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Homepage} />
    </div>
  );
}

export default App;
