import { takeLatest, put, all, call } from "redux-saga/effects";
import  UserActionTypes  from "./user-types";
import { googleProvider, auth, CreateUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { SignInSuccess, SignInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from "./user-actions";

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

export function* isUserAuthenticated() {
 try{
   const UserAuth = yield getCurrentUser();
   if(!UserAuth) return;
   const UserRef = yield call(CreateUserProfileDocument, UserAuth);

         const userSnapshot = yield UserRef.get();

         yield put(
             SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
         );
 }catch(error)
 {
     put(SignInFailure(error))
 }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
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

export function* signOut() {
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* UserSaga() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onEmailSignUpStart),
        call(signupSucess)
    ])
}

export function* signUpWithEmail({payload: {email, password, displayName}}) {
    try{
    const {user} = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
          signUpSuccess({user, additionalData: {displayName}})
    );
    }catch(error) {
        put(signUpFailure(error));
    }
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
    try{
        const UserRef = yield call(CreateUserProfileDocument, user, additionalData);
 
          const userSnapshot = yield UserRef.get();
 
          yield put(
              SignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
          );
    }catch(error)
    {
      put(SignInFailure(error))
    }
}

export function* onEmailSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUpWithEmail)
}

export function* signupSucess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp) 
}