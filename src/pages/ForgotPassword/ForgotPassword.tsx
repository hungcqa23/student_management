import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Input from '../../components/Input';
import authApi from '@/apis/auth.api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';

type FormData = {
  email: string;
};
export default function ForgotPassword() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: undefined
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: (body: { email: string }) => authApi.forgotPassword(body),
    onSuccess: () => {
      toast.success('Hãy kiểm tra email của bạn', {
        position: 'top-right'
      });
      reset();
    },
    onError: () => {
      toast.error('Đã xảy ra lỗi', {
        position: 'top-right'
      });
    }
  });

  const onSubmit = handleSubmit(data => {
    forgotPasswordMutation.mutate(data);
  });

  return (
    <form className='flex w-96 flex-col text-sm md:text-base' onSubmit={onSubmit}>
      <h1 className='mb-8 text-3xl font-semibold text-white'>Bạn quên mật khẩu?</h1>
      <p className='mb-4 text-sm font-normal text-white'>
        Hãy nhập email của bạn để chúng tôi có thể <br />
        giúp bạn tạo mật khẩu mới.
      </p>

      <Input
        classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
        placeholder='Nhập email ở đây...'
        id='fullName'
        autoFocus={true}
        autoComplete='off'
        register={register}
        name='email'
        errorMessage={errors.email?.message}
      />

      <Button className='w-full rounded bg-amber-400 py-2 hover:bg-amber-400/90'>
        <p className='font-bold uppercase text-black'>Gửi</p>
      </Button>
    </form>
  );
}
