import { takeLatest, put, all, call } from "redux-saga/effects";
import  UserActionTypes  from "./user-types";
import { googleProvider, auth, CreateUserProfileDocument } from "../../firebase/firebase.utils";
import { SignInSuccess, SignInFailure } from "./user-actions";

export function* signInWithGoogle() {
    try{
         const {user} = yield auth.signInWithPopup(googleProvider);
         const UserRef = yield call(CreateUserProfileDocument, user);

         const userSnapshot = yield UserRef.get();

         yield put(
             SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
         );
         
    }catch(error) {
          yield put(SignInFailure(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,
        signInWithGoogle
        )
}

export function* signInWithEmail({payload: {email, password}}) {
   try{
       const user = yield auth.signInWithEmailAndPassword(email, password);
       const UserRef = yield call(CreateUserProfileDocument, user);

         const userSnapshot = yield UserRef.get();

         yield put(
             SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
         );
   }catch(error)
   {
     put(SignInFailure(error))
   }
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail )
}

export function* UserSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])
}