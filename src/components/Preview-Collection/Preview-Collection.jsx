import React from 'react';

import './Preview-Collection-style.scss';
import CollectionItem from '../collection-item/collection-item';

const PreviewCollection = ({title, items}) => {
    return(
            <div className="collection-preview">
                <h1 className="title">{title.toUpperCase()}</h1>
                <div className="preview">
            {
                items.
                filter((item, idx) => idx < 4)
                .map(({id, imageUrl, price, name}) => (
                    <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} />
                ))
            }
                </div>
            </div>
    );
}

export default PreviewCollection;