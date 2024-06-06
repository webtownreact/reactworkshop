import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { decrement, increment } from '../../shared/stores/counter-slice';
import { IState } from '../interfaces/state.interface';

export function Counter() {
  const count = useSelector((state: IState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <h1>
          <span>{count}</span>
        </h1>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}
