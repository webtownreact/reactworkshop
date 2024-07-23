import React from 'react';

export interface ISelectOption {
  label: string;
  value: string;
}

export interface ISelectProps {
  label: string;
  options: ISelectOption[];
}

export const Select = (props: ISelectProps) => {
  return (
    <>
      <label>{props.label}</label>

      <select name="cars" id="cars">
        {props.options.map((iSelectOption: ISelectOption) => {
          return (
            <option key={iSelectOption.label} value={iSelectOption.value}>
              {iSelectOption.label}
            </option>
          );
        })}
      </select>
    </>
  );
};
