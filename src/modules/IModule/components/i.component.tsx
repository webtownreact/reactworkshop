import React, { useState } from 'react';
import { GenericComponent } from '../../shared/components/generic.component';

export const Component = () => {
  const [state, setState] = useState(null);

  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate a successful data fetch
        resolve('Data loaded successfully');
        // Simulate an error
        // reject('Error loading data');
      }, 2000);
    });
  };

  return (
    <GenericComponent state={state} setState={setState} promise={fetchData()}>
      <div slot="loading">Loading...</div>
      <div slot="error">Error occurred while loading data.</div>
      <div slot="content">{state}</div>
    </GenericComponent>
  );
};
