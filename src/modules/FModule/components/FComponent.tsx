import React, { useReducer } from 'react';
import { reducer } from '../reducers/f.reducer';
import { createCompanyUpdateIdAction, createCompanyUpdateNameAction } from '../actions/company.actions';

export const Component = () => {
  const [state, dispatch] = useReducer(reducer, { companyId: 123, companyName: 'companyName' });

  return (
    <>
      <div>{state?.companyId}</div>
      <div>{state?.companyName}</div>
      <div onClick={() => dispatch(createCompanyUpdateIdAction(543))}>UPDATE_ID</div>
      <div onClick={() => dispatch(createCompanyUpdateNameAction('companyNameTestUpdated'))}>UPDATE_NAME</div>
    </>
  );
};
