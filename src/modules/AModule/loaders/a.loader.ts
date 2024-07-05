import { json } from 'react-router-dom';

export const aLoader = async () => {
  const sdf = await new Promise((resolve) => setTimeout(() => resolve({ sdf: 'sdf' }), 2000));
  return json(sdf);
};
