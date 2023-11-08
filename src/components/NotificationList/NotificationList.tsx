import { Link } from 'react-router-dom';
import NotificationItem from '../NotificationItem/';

export default function NotificationList() {
  return (
    <div className='h-full w-fit bg-black px-3 py-2'>
      <div className='mb-3 flex items-end justify-between'>
        <span className='text-xl font-semibold text-white'>Thông báo</span>
        <Link to='/see-all' className='text-sm font-semibold text-gray-500 hover:underline'>
          Xem tất cả
        </Link>
      </div>

      <div className='flex flex-col gap-3'>
        <NotificationItem role='Nhân sự' />
        <NotificationItem role='Nhân sự' />
        <NotificationItem role='Giảng viên' />
        <NotificationItem role='Nhân sự' />
        <NotificationItem role='Giảng viên' />
        <NotificationItem role='Nhân sự' />
        <NotificationItem role='Giảng viên' />
        <NotificationItem role='Nhân sự' />
        <NotificationItem role='Giảng viên' />
      </div>
    </div>
  );
}
