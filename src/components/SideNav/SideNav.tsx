import { Link } from 'react-router-dom';
import ButtonNav from '../ButtonNav';

import homeActive from '/src/assets/icons/homeActive.svg';
import student from '/src/assets/icons/student.svg';
import teacher from '/src/assets/icons/teacher.svg';
import classes from '/src/assets/icons/classes.svg';
import course from '/src/assets/icons/course.svg';

const Links = [
  {
    to: '/',
    text: 'Trang chủ',
    svg: homeActive
  },
  {
    to: '/classes',
    text: 'Lớp học',
    svg: classes
  },
  {
    to: '/grades',
    text: 'Điểm',
    svg: classes
  },
  {
    to: '/attendances',
    text: 'Điểm danh',
    svg: classes
  },
  {
    to: '/notifications',
    text: 'Thông báo',
    svg: course
  }
];
export default function SideNav() {
  return (
    <nav className='fixed left-0 top-0 flex h-screen w-60 flex-col items-center bg-neutral-800 px-2'>
      <Link to='/' className='mb-4 block w-full text-center'>
        <img src='/src/assets/icons/logo.svg' alt='' className='inline h-24 w-24' />
      </Link>

      <div className='flex w-full flex-col gap-4'>
        {Links.map(link => (
          <ButtonNav key={link.to} to={link.to} text={link.text} svg={link.svg} />
        ))}
      </div>
    </nav>
  );
}
