import './App.css';
import React from 'react';
import HomePage from './pages/homepage/HomePage';
import {Switch, Route} from 'react-router-dom';

const HatsPage = () => (
       <div>
         <h1>
           HATS PAGE
         </h1>
       </div>
);

function App() {
  return (
            <React.Fragment>
              <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/hats' component={HatsPage} />
              </Switch>
            </React.Fragment>
  );
}

export default App;
