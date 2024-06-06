import { defer } from 'react-router-dom';

export const bLoader = () => {
  return defer({
    data: new Promise((resolve) => setTimeout(() => resolve({ asd: 'asd' }), 4000)),
  });
};
