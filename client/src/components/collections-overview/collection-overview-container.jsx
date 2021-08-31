import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../../redux/shop-data/shop-data-selector';

import WithSpinner from '../with-spinner/with-spinner';
import collectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const collectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(collectionsOverview);

export default collectionsOverviewContainer;

// const collectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionsOverview))