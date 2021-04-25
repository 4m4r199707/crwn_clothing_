import React from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionOverview from '../collection-overview/collection-overview.component'


const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionOverviewConatainer = 
    compose(
        connect(mapStateToProps),
        WithSpinner
    )(CollectionOverview);

export default CollectionOverviewConatainer;