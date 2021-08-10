import React from 'react';
import './collections-overview.scss';
import { createStructuredSelector } from 'reselect';
import { ShopDataSelector } from '../../redux/shop-data/shop-data-selector';

import {connect} from 'react-redux';
import PreviewCollection from '../Preview-Collection/Preview-Collection';

const CollectionsOverview = ({collections}) => (
     <div className="collections-overview">
         {
               collections.map(({id, ...otherCollectionProps}) => (
                   <PreviewCollection key={id} {...otherCollectionProps} />
               ))
         }
     </div>
);

const mapStateToProps = createStructuredSelector({
    collections: ShopDataSelector
});

export default connect(mapStateToProps)(CollectionsOverview);