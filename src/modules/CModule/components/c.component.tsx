import React, { useEffect, useState } from 'react';
import { ISdf } from 'src/modules/AModule/interfaces/sdf.interface';
import { TestComponent } from './test.component';

export const Component = () => {
  // const params = useParams();
  const [sdf, setSdf] = useState<ISdf | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const _sdf: ISdf = await new Promise((resolve) => setTimeout(() => resolve({ sdf: 'sdf' }), 2000));
        setSdf(_sdf);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    getData();

    return () => {};
  }, []);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <TestComponent a={<div>{sdf?.sdf}</div>} b={<div>{sdf?.sdf}</div>}>
      <div>this is a test</div>
    </TestComponent>
  );
};
