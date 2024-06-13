import React from 'react';
import { Outlet } from 'react-router-dom';

export const AuthGuard = () => {
  console.log('hello');
  console.log(localStorage.getItem('authorized'));

  return localStorage.getItem('authorized') === 'true' ? <Outlet /> : <div>NOT AUTHORIZED</div>;
};
