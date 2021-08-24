import './App.css';
import React from 'react';
import HomePage from './pages/homepage/HomePage';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.jsx';
import SignInSignUpPage from './pages/signup-and-signin/signup-signin';
import {auth, CreateUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import CheckOutPage from './pages/checkout/checkout';
import {checkUserSession} from './redux/user/user-actions'

class App extends React.Component {

 
  unsubscribeFromAuth = null

  componentDidMount() 
  {


    const {checkUserSession} = this.props;
    checkUserSession();

    // here it is also a async bcz we are making a API request
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async UserAuth => {
     
    //   if(UserAuth)
    //   {
    //     const UserRef = await CreateUserProfileDocument(UserAuth);
    //     UserRef.onSnapshot(snapShot => {
    //       this.props.setCurrentUser({
            
    //           id: snapShot.id,
    //           ...snapShot.data()
            
    //       });
          
    //     })
    //   }
    //   else 
    //   {
    //     setCurrentUser(UserAuth);
    //   }
    // })
  }

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }

  render()
  {
  return (
            <React.Fragment>
              <Header />
              <Switch>
              <Route exact path='/' component={HomePage} />
              <Route  path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckOutPage} />
              <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />): (<SignInSignUpPage />)} />
              </Switch>
            </React.Fragment>
  );
  }
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
