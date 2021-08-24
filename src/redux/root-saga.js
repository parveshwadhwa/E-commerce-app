import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop-data/shop-saga"; 
import { UserSaga } from "./user/user-saga";

export default function* rootSaga() {

    yield all([
        call(fetchCollectionsStart),
        call(UserSaga)
    ])

}