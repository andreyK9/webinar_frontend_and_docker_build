import { call, put, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signUpSuccess } from '../reducers/auth';

function* fetchSignUp(): Generator {
  yield call(() => Promise.resolve());

  yield put(signUpSuccess());
}

function* fetchSignIn(): Generator {
  yield call(() => Promise.resolve());

  yield put(signInSuccess());
}

function* signInSaga() {
  yield takeEvery('auth/signIn', fetchSignIn);
  yield takeEvery('auth/signUp', fetchSignUp);
}

export default signInSaga;
