import React from 'react';
import { useAuto, useAutoDispatch } from '../contexts/auto-context';
import { AutoActionType } from '../enums/auto.action-type';

export const F1Component = () => {
  const dispatch = useAutoDispatch();
  const state = useAuto();

  const setColorDispatch = (color: string) => {
    dispatch({
      type: AutoActionType.set_color,
      payload: {
        color,
      },
    });
  };

  const setNumberOfSeatsDispatch = (numberOfSeats: number) => {
    dispatch({
      type: AutoActionType.set_number_of_seats,
      payload: {
        numberOfSeats,
      },
    });
  };

  return (
    <>
      <h1>{state.color}</h1>
      <h1>{state.numberOfSeats}</h1>
      <input type="text" value={state.color} onChange={(event) => setColorDispatch(event.target.value)} />
      <input
        type="number"
        value={state.numberOfSeats}
        onChange={(event) => setNumberOfSeatsDispatch(Number(event.target.value))}
      />
    </>
  );
};
