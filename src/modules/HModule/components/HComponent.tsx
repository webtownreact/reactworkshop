import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export interface IData {
  age: string;
  category: string;
  aboutYou: string;
}

const schema = yup
  .object({
    age: yup.number().min(3, 'min 3').max(15, 'max 15').required('age is required'),
    category: yup.string().required(),
    aboutYou: yup.string().required(),
  })
  .required();

export const Component = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const [data] = useState<IData>({ age: '', category: '', aboutYou: '' });

  return (
    <>
      {/* <input type="text" onChange={(event) => console.log(event.target.value)} /> */}

      <form className="flex flex-col gap-4 mt-4 p-3" onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          type="number"
          {...register('age', {
            required: true,
            value: 11,
            onChange: () => {
              console.log('onChange', dirtyFields);
            },
            onBlur: () => {
              console.log('onBlur', dirtyFields);
            },
          })}
          placeholder="First name"
          className={errors?.age ? 'border-red-700 border-2 transition-colors' : ''}
        />
        <div>
          <p>{errors?.age?.message && errors?.age?.message}</p>
        </div>
        <select
          {...register('category', { required: true })}
          className={errors?.category ? 'border-red-700 border-2 transition-colors' : ''}
        >
          <option value="">Select...</option>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <div>
          <p>{errors?.category?.message && errors?.category?.message}</p>
        </div>
        <textarea
          {...register('aboutYou', { required: true })}
          placeholder="About you"
          className={errors?.aboutYou ? 'border-red-700 border-2 transition-colors' : ''}
        />
        <div>
          <p>{errors?.aboutYou?.message && errors?.aboutYou?.message}</p>
        </div>
        <p>{data.age}</p>
        <p>{data.category}</p>
        <p>{data.aboutYou}</p>
        <input type="submit" />
      </form>
    </>
  );
};
