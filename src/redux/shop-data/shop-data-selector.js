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