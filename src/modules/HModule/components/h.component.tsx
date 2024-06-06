import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputComponent } from '../../shared/components/input.component';
import { DateTime } from 'luxon';
import { useTranslation } from 'react-i18next';

export const Component = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    getValues,
  } = useForm({
    resolver: yupResolver(
      yup
        .object({
          firstName: yup.string().max(3).required('custom required text'),
          age: yup.number().positive().integer().required(),
        })
        .required(),
    ),
  });

  const onSubmit = (data) => {
    console.log(data);
    console.log(getValues());
  };

  const buttonTypeButtonOnClick = () => {
    console.log(getValues());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent
        label={'firstName'}
        placeholder={'firstName'}
        path={'firstName'}
        type="text"
        onChange={(e) => console.log(e.target.value)}
        onBlur={(e) => console.log(e.target.value)}
        register={register}
        fieldError={errors.firstName}
      />

      <InputComponent
        label={'age'}
        placeholder={'age'}
        path={'age'}
        type="number"
        register={register}
        fieldError={errors.age}
      />

      <input type="submit" />
      <button type="button" onClick={() => buttonTypeButtonOnClick()} />

      <div>-------------------</div>
      <div>{isDirty ? 'true' : 'false'}</div>
      <div>-------------------</div>

      <div>
        {DateTime.now()
          .setZone('America/Los_Angeles')
          .plus({ weeks: 1, days: 2 })
          .setLocale('en')
          .toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS)}
      </div>

      <div>{t('Welcome to React')}</div>
    </form>
  );
};
