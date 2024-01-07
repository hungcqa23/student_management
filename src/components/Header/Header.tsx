import { ExitIcon } from '@radix-ui/react-icons';
import { Button } from '../ui/button';
import { useAppContext } from '@/contexts/app.contexts';
import { clearLS } from '@/utils/auth';

export default function Header() {
  const { setIsAuthenticated } = useAppContext();
  return (
    <header className='fixed left-60 right-0 top-0 bg-neutral-950'>
      <div className='flex h-full items-center justify-between px-6 py-3'>
        <div>
          <h1 className='mb-3 text-3xl font-bold text-white'>
            <span className='font-light'>Xin chào</span> Lý Thanh Tú Anh
          </h1>
          <p className='text-sm font-light text-white'>
            Cùng EduHub quản lý các lớp học và học viên của bạn.
          </p>
        </div>
        <div className='flex items-center gap-3'>
          <Button
            variant={'outline'}
            className='flex w-32 gap-2'
            onClick={() => {
              setIsAuthenticated(false);
              clearLS();
            }}
          >
            <ExitIcon /> Đăng xuất
          </Button>
        </div>
      </div>
    </header>
  );
}
