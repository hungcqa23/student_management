import { Link } from 'react-router-dom';
import { Outlet, useMatch } from 'react-router-dom';

export default function AuthLayout() {
  const matchPath = useMatch('/:path')?.params.path;
  const isLogin = matchPath === 'login';
  const isSignUp = matchPath === 'sign-up';

  return (
    <div className='relative mx-auto flex h-screen w-screen items-center justify-center bg-zinc-900 '>
      <div className='hidden shrink basis-[40rem] flex-col items-center md:flex'>
        <img src='/src/assets/images/hero_image_1.svg' className='w-96' />
        <h1 className='w-full text-5xl font-medium text-white'>
          Cùng <span className='text-amber-400'>EduHub</span> quản lý lớp học và học viên của bạn
        </h1>

        <div className='mt-5 flex items-center gap-2 self-start font-medium'>
          <p className='text-lg font-medium text-white'>
            {isLogin && 'Lần đầu đến với Eduhub?'}
            {isSignUp && 'Đăng ký để bắt đầu quản lý'}
          </p>
          {matchPath === 'login' && (
            <Link to='/sign-up'>
              <button className='h-10 w-32  rounded-lg bg-amber-400 font-bold text-black hover:bg-amber-400/90'>
                Đăng ký
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className='flex max-w-lg grow justify-center p-4 sm:p-7'>
        <Outlet />
      </div>
    </div>
  );
}
