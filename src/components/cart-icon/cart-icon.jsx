import React from 'react';

import './cart-icon-styles.scss';
import {connect} from 'react-redux';
import { ToggleCartHidden } from '../../redux/cart/cart-actions';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

const CartIcon = ({ToggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={ToggleCartHidden}>
          <ShoppingIcon className="shopping-icon" />
          <span className="item-count">{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    ToggleCartHidden: () => dispatch(ToggleCartHidden())
});

const mapStateToProps = ({cart: {cartItems} }) => ({
  itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);