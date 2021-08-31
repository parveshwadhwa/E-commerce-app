import { createSelector } from "reselect";
import { satisfies } from "semver";

const shopselector = state => state.shopdata;

export const ShopDataSelector = createSelector(
    [shopselector],
    shopdata => shopdata.collections
)

export const selectCollectionsForPreview = createSelector(
    [ShopDataSelector],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [ShopDataSelector],
    collections => collections ? collections[collectionUrlParam] : null
)

export const selectIsCollectionFetching = createSelector(
   [shopselector],
   shop => shop.isFetching
);

export const selectIsCollectionLoaded = createSelector( // it will return false if collection loads
    [shopselector],
    shop => !!shop.collections // !! (double bang) is used to convert any value to boolean like !!0 = false , !!null = false, !!2 = true, !!{} = true etc.
);