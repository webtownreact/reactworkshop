import React from 'react';
import store from '../../shared/stores/counter-store';
import { Provider } from 'react-redux';
import { Counter } from './counter.component';

export const Component = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
