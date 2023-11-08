import Profile from '../Profile';

export default function Header() {
  return (
    <header className='fixed left-60 right-0 top-0 bg-black'>
      <div className='flex h-full items-center justify-between px-6 py-3'>
        <div>
          <h1 className='mb-3 text-3xl font-bold text-white'>Lý Thanh Tú Anh</h1>
          <p className='text-sm font-normal text-gray-500'>
            Vai trò: <span className='text-base text-white'>Quản lý nhân sự</span>
          </p>
        </div>
        <div className='flex items-center gap-5'>
          <div className='flex h-11 w-11 items-center justify-center rounded-full bg-gray-700'>
            <img src='/src/assets/icons/bell.svg' alt='' />
          </div>
          <Profile />
        </div>
      </div>
    </header>
  );
}
