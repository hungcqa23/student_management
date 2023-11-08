import { Outlet } from 'react-router-dom';
import SideNav from '../../components/SideNav';
import Header from '../../components/Header';

export default function MainLayout() {
  return (
    <div className='h-screen w-screen overflow-x-hidden bg-white'>
      <SideNav />
      <Header />
      <div className='ml-60 mt-[6rem]'>
        <Outlet />
      </div>
    </div>
  );
}
