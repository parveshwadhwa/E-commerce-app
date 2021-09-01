import {GlobalStyle} from './global-styles';
import React, {useEffect} from 'react';
import HomePage from './pages/homepage/HomePage';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Contact from './pages/contact/contact';
import Header from './components/header/header.jsx';
import SignInSignUpPage from './pages/signup-and-signin/signup-signin';
import {connect} from 'react-redux';
import { selectCurrentUser } from './redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import CheckOutPage from './pages/checkout/checkout';
import {checkUserSession} from './redux/user/user-actions';
import Footer from './components/footer/footer';

const App = ({checkUserSession, currentUser}) => {

   useEffect(() => {
        checkUserSession()
   }, [checkUserSession]);

  /*componentDidMount() 
  {


    const {checkUserSession} = this.props;
    checkUserSession();

    here it is also a async bcz we are making a API request
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async UserAuth => {
     
      if(UserAuth)
      {
        const UserRef = await CreateUserProfileDocument(UserAuth);
        UserRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          });
          
        })
      }
      else 
      {
        setCurrentUser(UserAuth);
      }
    })
  } */
  return (
            <div>
              <GlobalStyle />
              <Header />
              <Switch>
              <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />): (<SignInSignUpPage />)} />
              <Route exact path='/' component={HomePage} />
              <Route exact path='/contact' component={Contact} />
              <Route  path='/shop' component={ShopPage} />
              <Route exact path='/checkout' component={CheckOutPage} />
              </Switch>
              <Footer />
            </div>
  );
  
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
