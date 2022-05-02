import { all } from 'redux-saga/effects';

import { mailConfirmSaga, phoneSaga, signInSaga } from 'pages/Auth/sagas';

export default function* rootSaga() {
  yield all([mailConfirmSaga(), phoneSaga(), signInSaga()]);
}
