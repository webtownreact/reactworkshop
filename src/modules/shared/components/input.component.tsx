import React from 'react';
import { IInput } from '../interfaces/input.interface';

export const InputComponent = ({
  label,
  register,
  fieldError,
  path,
  type,
  placeholder,
  value,
  disabled,
  readonly,
  onChange,
  onBlur,
  defaultValue,
}: IInput) => {
  const getStyle: () => string = () => {
    const basicClasses = 'block w-full rounded-md border-0 py-1.5 pr-10 sm:text-sm sm:leading-6';
    if (fieldError?.message) {
      return (
        basicClasses +
        ' text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500'
      );
    } else {
      return (
        basicClasses +
        ' text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600'
      );
    }
  };

  return (
    <div className="h-24">
      <label className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
      <input
        type={type}
        className={getStyle()}
        {...register(path, {
          value,
          onChange,
          onBlur,
        })}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readonly}
        defaultValue={defaultValue}
      />
      <p className="m-0 mt-2 text-sm text-red-600">{fieldError?.message ? fieldError.message : ''}</p>
    </div>
  );
};
