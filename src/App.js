import './App.css';
import React from 'react';
import HomePage from './pages/homepage/HomePage';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.jsx';
import SignInSignUpPage from './pages/signup-and-signin/signup-signin';

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
              <Header />
              <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/signin' component={SignInSignUpPage} />
              </Switch>
            </React.Fragment>
  );
}

export default App;
