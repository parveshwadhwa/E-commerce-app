import { takeLatest, put, all, call } from "redux-saga/effects";
import  UserActionTypes  from "./user-types";
import { googleProvider, auth, CreateUserProfileDocument } from "../../firebase/firebase.utils";
import { googleSignInSuccess, googleSignInFailure } from "./user-actions";

export function* signInWithGoogle() {
    try{
         const {user} = yield auth.signInWithPopup(googleProvider);
         const UserRef = yield call(CreateUserProfileDocument, user);

         const userSnapshot = yield UserRef.get();

         yield put(
             googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
         );
         
    }catch(error) {
          yield put(googleSignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
        )
}

export function* UserSaga() {
    yield all([
        call(onGoogleSignInStart)
    ])
}