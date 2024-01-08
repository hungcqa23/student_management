import { Link } from 'react-router-dom';
import ButtonNav from '../ButtonNav';

import homeActive from '/src/assets/icons/homeActive.svg';
import home from '/src/assets/icons/home.svg';
import classes from '/src/assets/icons/classes.svg';
import recovery from '/src/assets/icons/recovery.svg';
import notification from '/src/assets/icons/notification.svg';
import notificationActive from '/src/assets/icons/notificationActive.svg';
import courseActive from '/src/assets/icons/courseActive.svg';
import recoveryActive from '/src/assets/icons/recoveryActive.svg';
import grade from '/src/assets/icons/grade.svg';
import gradeActive from '/src/assets/icons/gradeActive.svg';
import attendance from '/src/assets/icons/attendance.svg';
import attendanceActive from '/src/assets/icons/attendanceActive.svg';
import fee from '/src/assets/icons/fee.svg';
import feeActive from '/src/assets/icons/feeActive.svg';

import path from '@/constants/path';

const Links = [
  {
    to: '',
    text: 'Trang chủ',
    svg: home,
    svgActive: homeActive
  },
  {
    to: 'courses',
    text: 'Lớp học',
    svg: classes,
    svgActive: courseActive
  },
  {
    to: 'grades',
    text: 'Nhập Điểm',
    svg: grade,
    svgActive: gradeActive
  },
  {
    to: 'attendances',
    text: 'Điểm danh',
    svg: attendance,
    svgActive: attendanceActive
  },
  {
    to: 'notifications',
    text: 'Thông báo',
    svg: notification,
    svgActive: notificationActive
  },
  {
    to: path.recovery,
    text: 'Khôi phục',
    svg: recovery,
    svgActive: recoveryActive
  },
  {
    to: path.fee,
    text: 'Học phí',
    svg: fee,
    svgActive: feeActive
  }
];
export default function SideNav() {
  return (
    <nav className='fixed left-0 top-0 flex h-screen w-60 flex-col items-center bg-neutral-950 px-2'>
      <Link to='/' className='mb-4 block w-full text-center'>
        <img src='/src/assets/icons/logo.svg' alt='' className='inline h-24 w-24' />
      </Link>

      <div className='flex w-full flex-col gap-4'>
        {Links.map(link => (
          <ButtonNav
            key={link.to}
            to={link.to}
            text={link.text}
            svg={link.svg}
            svgActive={link.svgActive}
          />
        ))}
      </div>
    </nav>
  );
}
