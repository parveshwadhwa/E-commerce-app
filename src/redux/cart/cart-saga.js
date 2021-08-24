import { takeLatest, all, call , put } from "@redux-saga/core/effects";
import UserActionTypes from "../user/user-types";
import { clearCart } from "./cart-actions";

export function* cartSagas() {
    yield all ([
    call(onSignOutSuccess)
    ])
}

export function* clearCartOnSign() {
    yield put(clearCart());
}

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSign)
}