import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export default function Button(props: ButtonProps) {
  const { className = 'w-full rounded-md bg-amber-300 py-2', children, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
