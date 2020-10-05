import { all } from 'redux-saga/effects';

import produto from './produto/sagas';

export default function* rootSaga() {
  return yield all([produto]);
}
