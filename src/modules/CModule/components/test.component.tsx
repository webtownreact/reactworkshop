import React, { ReactElement } from 'react';

export interface ITestComponent {
  a: ReactElement;
  b: ReactElement;
  children: ReactElement;
}

export const TestComponent = ({ a, b, children }: ITestComponent) => {
  return (
    <div>
      <div>{a}</div>
      <div>{b}</div>
      {children}
    </div>
  );
};
