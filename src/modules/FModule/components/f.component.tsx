import React, { useReducer } from 'react';
import { autoReducer } from '../reducers/auto.reducer';
import { AutoContext, AutoDispatchContext } from '../contexts/auto-context';
import { F1Component } from './f1.component';

export const Component = () => {
  const [state, dispatch] = useReducer(autoReducer, { color: 'green', numberOfSeats: 5 });

  return (
    <AutoContext.Provider value={state}>
      <AutoDispatchContext.Provider value={dispatch}>
        <F1Component />
      </AutoDispatchContext.Provider>
    </AutoContext.Provider>
  );
};
