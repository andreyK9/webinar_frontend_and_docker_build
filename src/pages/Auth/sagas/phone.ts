import { call, put, takeEvery } from 'redux-saga/effects';
import { confirmSuccess, sendSuccess } from '../reducers/phone';

function* fetchToSendPhone(): Generator {
  const number = yield call(() => Promise.resolve('4444444'));

  yield put(sendSuccess(number));
}

function* fetchToConfirmPhone(): Generator {
  const isValid = yield call(() => Promise.resolve(true));

  yield put(confirmSuccess(isValid));
}

function* phoneSaga() {
  yield takeEvery('phone/confirm', fetchToConfirmPhone);
  yield takeEvery('phone/send', fetchToSendPhone);
}

export default phoneSaga;
