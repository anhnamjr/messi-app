import { PayloadAction } from '@reduxjs/toolkit';
import { all, delay, put, takeEvery } from '@redux-saga/core/effects';
import { incrementSaga, incrementSagaSuccess } from './counterSlice';

function* increment(action: PayloadAction<number>) {
  yield delay(2000);
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  yield all([takeEvery(incrementSaga.toString(), increment)]);
}
