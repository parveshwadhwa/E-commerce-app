import React from 'react';
import {Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop-data/shop-actions';
import collectionsOverviewContainer from '../../components/collections-overview/collection-overview-container';
import CollectionPageContainer from '../collection/collection-component-container';

import WithSpinner from '../../components/with-spinner/with-spinner';


class ShopPage extends React.Component {
    // state = {
    //     loading: true
    // };
    // unsubscribeFromSnapshot = null;

    componentDidMount()
    {

        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();

        // const {updateCollections} = this.props;
        // const collectionRef = firestore.collection('collections');

        // /***********We Get The data using query (Without Observable/Observer Pattern)*/ 

        // collectionRef.get().then(snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // });

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
        const {match, isCollectionFetching, isLoaded} = this.props;
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={collectionsOverviewContainer} /> 
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>

        );
    }
} 

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
