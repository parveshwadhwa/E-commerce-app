import React from 'react';
import { connect } from 'react-redux';

import {
  ClearItem,
  AddItem,
  RemoveItem
} from '../../redux/cart/cart-actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, ClearItem, AddItem, RemoveItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => RemoveItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => AddItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => ClearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  ClearItem: item => dispatch(ClearItem(item)),
  AddItem: item => dispatch(AddItem(item)),
  RemoveItem: item => dispatch(RemoveItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);