import authApi from '@/apis/auth.api';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useQueryString } from '@/hooks/useQueryString';
import { schema } from '@/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const resetSchema = schema.pick(['password', 'confirmPassword']);
export default function ResetPassword() {
  const navigate = useNavigate();
  const { token } = useQueryString();
  if (!token) {
    toast.error('TOKEN IS WRONG. PLEASE TRY AGAIN', {
      position: 'top-right'
    });
    navigate('/forgot-password');
  }

  const resetMutation = useMutation({
    mutationFn: (body: { password: string; confirmPassword: string }) =>
      authApi.resetPassword({ ...body, token }),
    onSuccess: () => {
      toast.success('Lấy lại mật khẩu thành công!', {
        position: 'top-right'
      });
      navigate('/login');
    },
    onError: () => {
      toast.error('Hãy nhập lại thông tin', {
        position: 'top-right'
      });
    }
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{
    password: string;
    confirmPassword: string;
  }>({ resolver: yupResolver(resetSchema) });

  const onSubmit = handleSubmit(data => {
    resetMutation.mutate(data);
  });

  return (
    <form onSubmit={onSubmit} className='flex w-96 flex-col text-sm md:text-base'>
      <div className='mt-6 flex flex-col gap-4'>
        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='password'>
            Mật khẩu mới
          </label>
          <Input
            placeholder='Nhập mật khẩu mới...'
            autoFocus={true}
            autoComplete='on'
            name='password'
            register={register}
            errorMessage={errors.password?.message}
          />
        </div>

        <div>
          <label className='mb-1 block font-medium text-white' htmlFor='password'>
            Xác thực mật khẩu mới
          </label>
          <Input
            placeholder='Nhập mật khẩu ở đây...'
            id='password'
            type='password'
            name='confirmPassword'
            register={register}
            errorMessage={errors.confirmPassword?.message}
          />
        </div>
      </div>

      <Button className='w-full rounded-md bg-amber-400 py-2 hover:bg-amber-400/90' type='submit'>
        <p className='font-semibold uppercase text-black'>Lấy lại mật khẩu</p>
      </Button>
    </form>
  );
}
