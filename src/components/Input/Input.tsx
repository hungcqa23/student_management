import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  classNameInput?: string;
  classNameError?: string;
  errorMessage?: string;
}
export default function Input(props: InputProps) {
  const {
    className,
    classNameInput = 'block rounded-lg py-3 text-base pl-3 font-medium w-full focus:outline-none',
    classNameError = 'min-h-[1.25rem] text-red-600 font-medium',
    ...rest
  } = props;
  return (
    <div>
      <input {...rest} className={classNameInput} />
      <p className={classNameError}></p>
    </div>
  );
}
