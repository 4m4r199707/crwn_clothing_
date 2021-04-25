import React from 'react';

import { Route } from 'react-router-dom';
import './shop.styles.scss';

import { connect } from 'react-redux';

import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

import CollectionOverviewConatainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../../pages/collection/collection.container';


class ShopPage extends React.Component {

    componentDidMount(){
        const { fetchCollectionStartAsync } = this.props;
        fetchCollectionStartAsync();
    }
    render(){
        const { match } = this.props;
        return (
            <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverviewConatainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}/>
        </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null ,mapDispatchToProps)(ShopPage);