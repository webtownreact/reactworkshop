import React from 'react';
import { Provider } from 'react-redux';
import store from '../stores/store';
import { Counter } from './counter.components';

export const Component = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
