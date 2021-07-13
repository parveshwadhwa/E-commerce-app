import React, { Component } from 'react'
import ShopData from './shop-data';
import PreviewCollection from '../../components/Preview-Collection/Preview-Collection';

export default class ShopPage extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            collections: ShopData
    };
}
    render() 
    {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
               collections.map(({id, ...otherCollectionProps}) => (
                   <PreviewCollection key={id} {...otherCollectionProps} />
               ))
    }
            </div>
        )
    }
 }
