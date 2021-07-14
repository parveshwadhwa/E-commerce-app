import './App.css';
import React from 'react';
import HomePage from './pages/homepage/HomePage';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.jsx';
import SignInSignUpPage from './pages/signup-and-signin/signup-signin';
import {auth} from './firebase/firebase.utils'

const HatsPage = () => (
       <div>
         <h1>
           HATS PAGE
         </h1>
       </div>
);

class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() 
  {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});

      console.log(user);
    })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
  return (
            <React.Fragment>
              <Header currentUser={this.state.currentUser} />
              <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/shop' component={ShopPage} />
              <Route exact path='/signin' component={SignInSignUpPage} />
              </Switch>
            </React.Fragment>
  );
  }
}

export default App;
