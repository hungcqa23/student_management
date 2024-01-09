import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '@/utils/rules';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import authApi from '@/apis/auth.api';
import { useNavigate } from 'react-router-dom';

type FormData = {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
};
const registerSchema = schema.pick(['confirmPassword', 'fullName', 'password', 'username']);

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  });
  const navigate = useNavigate();
  const signUpMutation = useMutation({
    mutationFn: (body: FormData) => authApi.register(body),
    onSuccess: () => {
      toast.success('Đăng ký thành công');
      navigate('/login');
    },
    onError: () => {
      toast.error('Đăng ký thất bại');
    }
  });

  const onSubmit = handleSubmit(data => {
    signUpMutation.mutate(data);
  });

  return (
    <form className='flex w-96 flex-col text-sm md:text-base' onSubmit={onSubmit}>
      <div className='mb-2 mt-6 flex flex-col gap-2'>
        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='fullName'>
            Họ và tên
          </label>
          <Input
            classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập họ và tên...'
            id='fullName'
            autoFocus={true}
            autoComplete='off'
            register={register}
            name='fullName'
            errorMessage={errors.fullName?.message}
          />
        </div>

        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='username'>
            Tên tài khoản
          </label>
          <Input
            classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập email tại đây...'
            id='username'
            autoFocus={true}
            autoComplete='off'
            register={register}
            name='username'
            errorMessage={errors.username?.message}
          />
        </div>

        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='password'>
            Mật khẩu
          </label>
          <Input
            classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập mật khẩu...'
            id='password'
            type='password'
            autoComplete='on'
            register={register}
            name='password'
            errorMessage={errors.password?.message}
          />
        </div>

        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='passwordConfirm'>
            Xác nhận mật khẩu
          </label>
          <Input
            classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
            placeholder='Nhập lại mật khẩu...'
            id='passwordConfirm'
            type='password'
            autoComplete='on'
            register={register}
            name='confirmPassword'
            errorMessage={errors.confirmPassword?.message}
          />
        </div>
      </div>

      <Button className='w-full rounded bg-amber-400 py-2' type='submit'>
        <p className='font-semibold uppercase text-black'>Đăng ký</p>
      </Button>
    </form>
  );
}
