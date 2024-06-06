import { FieldError, Path, UseFormRegister } from 'react-hook-form';

export interface IInput {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  path: Path<any>;
  fieldError: FieldError | undefined | null;
  type: string;
  placeholder: string;
  value?: string | Date | number | undefined | null;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (event) => void;
  onBlur?: (event) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
}
