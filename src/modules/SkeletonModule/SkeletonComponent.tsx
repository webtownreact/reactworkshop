import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { HeaderComponent } from '../SharedModule/components/header.component';

export const SkeletonComponent = () => {
  return (
    <>
      <ScrollRestoration />
      <HeaderComponent />
      <Outlet />
    </>
  );
};
