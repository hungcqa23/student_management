import Button from '../../components/Button';
import Input from '../../components/Input';

export default function ForgotPassword() {
  return (
    <form className='flex w-96 flex-col text-sm md:text-base'>
      <h1 className='mb-8 text-3xl font-semibold text-white'>Bạn quên mật khẩu?</h1>
      <p className='mb-4 text-sm font-normal text-white'>
        Hãy nhập email của bạn để chúng tôi có thể <br />
        giúp bạn tạo mật khẩu mới.
      </p>

      <Input
        classNameInput='block rounded py-3 pl-3 font-medium w-full focus:outline-none'
        placeholder='Nhập email ở đây...'
        id='fullName'
        autoFocus={true}
        autoComplete='off'
      />

      <Button className='w-full rounded bg-amber-400 py-2 hover:bg-amber-400/90'>
        <p className='font-bold uppercase text-black'>Gửi</p>
      </Button>
    </form>
  );
}
