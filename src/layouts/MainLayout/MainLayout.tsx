import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';

export default function MainLayout() {
  return (
    <div className='h-screen w-screen overflow-x-hidden overflow-y-hidden bg-neutral-900'>
      <SideNav />
      <Header />
      <div className='ml-60 mt-[6rem] flex h-[calc(100vh-6rem)] w-[calc(100%-15rem)] items-center justify-center overflow-x-hidden overflow-y-hidden'>
        <div className='h-[calc(100%-2rem)] w-[calc(100%-2rem)] overflow-y-auto overflow-x-hidden rounded-2xl bg-white p-10'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
