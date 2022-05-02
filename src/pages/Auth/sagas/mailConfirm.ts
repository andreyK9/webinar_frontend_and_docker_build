import { call, put, takeEvery } from 'redux-saga/effects';

import { confirmMailSuccess } from '../reducers/mailConfirm';
function* checkMailConfirm(): Generator<any> {
  const isMailValid = yield call(() => Promise.resolve(true));

  yield put(confirmMailSuccess(isMailValid));
}

function* mailConfirmSaga() {
  yield takeEvery('mailConfirm/confirmMail', checkMailConfirm);
}

export default mailConfirmSaga;
