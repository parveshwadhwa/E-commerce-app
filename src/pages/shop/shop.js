import React, { Component } from 'react'
import PreviewCollection from '../../components/Preview-Collection/Preview-Collection';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ShopDataSelector } from '../../redux/shop-data/shop-data-selector';

const ShopPage =({collections}) => 
(
            <div className="shop-page">
                {
               collections.map(({id, ...otherCollectionProps}) => (
                   <PreviewCollection key={id} {...otherCollectionProps} />
               ))
    }
            </div>
);

const mapStateToProps = createStructuredSelector({
    collections: ShopDataSelector
})

export default connect(mapStateToProps)(ShopPage);
