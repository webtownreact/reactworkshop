import React from 'react';
import { ITestComponent } from '../interfaces/test-component.interface';

export const TestComponent = ({ a, b, children }: ITestComponent) => {
  return (
    <div>
      <div>{a}</div>
      <div>{b}</div>
      {children}
    </div>
  );
};
