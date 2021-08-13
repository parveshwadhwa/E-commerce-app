import React from 'react';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header-styles';


import './header-style.scss';

const Header = ({currentUser, hidden}) => (

    <HeaderContainer>
    <LogoContainer to="/" >
        <Logo className="logo" />
    </LogoContainer>

    < OptionsContainer >
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {
            currentUser ? 
            < OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</ OptionLink>
            :
            <OptionLink to="/signin">Sign In</OptionLink>
        }
        <CartIcon />
    </ OptionsContainer >
    {
        hidden? null :
         <CartDropDown />
    }
    </HeaderContainer>

);

const mapStateToProps =  createStructuredSelector ({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);