import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/');
    } else {
      alert('Đăng nhập thất bại');
    }
  };

  return (
    <form className='flex flex-col' onSubmit={onSubmit}>
      <div className='flex justify-center'>
        <img src='/src/assets/icons/logo.svg' alt='Logo' />
      </div>

      <div className='mt-6 flex flex-col gap-4'>
        <div>
          <label className='mb-1 block text-base font-medium text-white' htmlFor='username'>
            Tên tài khoản
          </label>
          <Input
            classNameInput='block rounded-lg py-3 text-base pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập tài khoản ở đây...'
            id='username'
            autoFocus={true}
            autoComplete='off'
            onChange={onChangeUsername}
          />
        </div>

        <div>
          <label className='mb-1 block text-base font-medium text-white' htmlFor='password'>
            Mật khẩu
          </label>
          <Input
            placeholder='Nhập mật khẩu ở đây...'
            id='password'
            type='password'
            autoComplete='on'
            onChange={onChangePassword}
          />
        </div>
      </div>

      <Link
        to='/forgot-password'
        className='my-4 text-right font-medium text-white hover:underline hover:underline-offset-2'
      >
        Quên mật khẩu
      </Link>
      <Button className='w-full rounded-md bg-amber-300 py-3'>
        <p className='font-semibold uppercase text-black'>Đăng nhập</p>
      </Button>
    </form>
  );
}
