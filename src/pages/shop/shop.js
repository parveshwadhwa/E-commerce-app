import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection-component';
import { connect } from 'react-redux';

import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop-data/shop-actions';
import WithSpinner from '../../components/with-spinner/with-spinner';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    unsubscribeFromSnapshot = null;

    componentDidMount()
    {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        /***********We Get The data using query (Without Observable/Observer Pattern)*/ 

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false});
        });

        /*********We get The Data Using Fetch (An API Request) and in most of the projects we will use this  */

        // fetch('https://firestore.googleapis.com/v1/projects/e-commerce-app-5727b/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections));

        /************(We get the data using observable/observer pattern)************* */
        
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // });
    }
    render()
    {
        const {match} = this.props;
        const {loading} = this.state;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props} />)} /> 
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
            </div>

        );
    }
} 

const mapDispatchToProps = (dispatch) => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
