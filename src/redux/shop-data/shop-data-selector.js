import { createSelector } from "reselect";
import { satisfies } from "semver";

const shopselector = state => state.shopdata;

export const ShopDataSelector = createSelector(
    [shopselector],
    shopdata => shopdata.ShopData
)

export const selectCollectionsForPreview = createSelector(
    [ShopDataSelector],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [ShopDataSelector],
    collections => collections[collectionUrlParam]
)