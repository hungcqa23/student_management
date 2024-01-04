import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function Register() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className='flex w-96 flex-col text-sm md:text-base' onSubmit={onSubmit}>
      <div className='mb-2 mt-6 flex flex-col gap-2'>
        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='fullName'>
            Họ và tên
          </label>
          <Input
            classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập họ và tên'
            id='fullName'
            autoFocus={true}
            autoComplete='off'
          />
        </div>

        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='username'>
            Tên tài khoản
          </label>
          <Input
            classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập tên tài khoản'
            id='username'
            autoFocus={true}
            autoComplete='off'
          />
        </div>

        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='password'>
            Mật khẩu
          </label>
          <Input
            classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập mật khẩu'
            id='password'
            type='password'
            autoComplete='on'
          />
        </div>

        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='passwordConfirm'>
            Xác nhận mật khẩu
          </label>
          <Input
            classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập lại mật khẩu'
            id='passwordConfirm'
            type='password'
            autoComplete='on'
          />
        </div>
      </div>

      <Button className='w-full rounded bg-amber-400 py-2'>
        <p className='font-semibold uppercase text-black'>Đăng ký</p>
      </Button>
    </form>
  );
}
