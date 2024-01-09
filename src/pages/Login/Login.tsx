import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useForm } from 'react-hook-form';
import { Schema, schema } from '@/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import authApi from '@/apis/auth.api';
import { toast } from 'react-toastify';
import { useAppContext } from '@/contexts/app.contexts';

const loginSchema = schema.pick(['email', 'password']);
type FormData = Omit<Schema, 'confirmPassword' | 'username' | 'fullName'>;
export default function Login() {
  const { setIsAuthenticated, setProfile } = useAppContext();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  });
  const loginMutation = useMutation({
    mutationFn: (body: FormData) => authApi.login(body)
  });
  const onSubmit = handleSubmit(data => {
    loginMutation.mutate(data, {
      onSuccess: data => {
        toast.success('Successfully login!', {
          position: toast.POSITION.TOP_RIGHT
        });
        setTimeout(() => {
          setIsAuthenticated(true);
          setProfile(data.data?.data.user);
        }, 1000);
      },
      onError: () => {
        toast.error('Login failed!', {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    });
  });

  return (
    <form className='flex w-96 flex-col text-sm md:text-base' onSubmit={onSubmit}>
      <div className='flex justify-center'>
        <img src='/src/assets/icons/logo.svg' alt='Logo' />
      </div>

      <div className='mt-6 flex flex-col gap-4'>
        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='username'>
            Tên tài khoản
          </label>
          <Input
            placeholder='Nhập email ở đây...'
            id='email'
            autoFocus={true}
            autoComplete='on'
            name='email'
            register={register}
            errorMessage={errors.email?.message}
          />
        </div>

        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='password'>
            Mật khẩu
          </label>
          <Input
            placeholder='Nhập mật khẩu ở đây...'
            id='password'
            type='password'
            name='password'
            register={register}
            errorMessage={errors.password?.message}
          />
        </div>
      </div>

      <Link
        to='/forgot-password'
        className='my-4 text-right font-medium text-white hover:underline hover:underline-offset-2'
      >
        Quên mật khẩu
      </Link>
      <Button className='w-full rounded-md bg-amber-400 py-2 hover:bg-amber-400/90' type='submit'>
        <p className='font-semibold uppercase text-black'>Đăng nhập</p>
      </Button>
    </form>
  );
}
