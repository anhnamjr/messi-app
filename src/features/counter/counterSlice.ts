import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementSaga: (state, action: PayloadAction<number>) => {
      state.status = 'loading';
    },
    incrementSagaSuccess: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      state.status = 'idle';
    },
  },
});

export const { increment, decrement, incrementByAmount, incrementSaga, incrementSagaSuccess } =
  counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
