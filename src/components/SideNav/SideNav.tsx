import { Link } from 'react-router-dom';
import ButtonNav from '../ButtonNav';

import homeActive from '/src/assets/icons/homeActive.svg';
import faculty from '/src/assets/icons/faculty.svg';
import student from '/src/assets/icons/student.svg';
import teacher from '/src/assets/icons/teacher.svg';
import classes from '/src/assets/icons/classes.svg';
import course from '/src/assets/icons/course.svg';
import account from '/src/assets/icons/account.svg';
import year from '/src/assets/icons/year.svg';

const Links = [
  {
    to: '/',
    text: 'Trang chủ',
    svg: homeActive
  },
  {
    to: '/khoa',
    text: 'Khoa',
    svg: faculty
  },
  {
    to: '/students',
    text: 'Sinh viên',
    svg: student
  },
  {
    to: '/teachers',
    text: 'Giảng viên',
    svg: teacher
  },
  {
    to: '/classes',
    text: 'Lớp học',
    svg: classes
  },
  {
    to: '/subjects',
    text: 'Môn học',
    svg: course
  },
  {
    to: '/years',
    text: 'Năm học',
    svg: year
  },
  {
    to: '/accounts',
    text: 'Tài khoản',
    svg: account
  }
];
export default function SideNav() {
  return (
    <nav className='fixed left-0 top-0 flex h-screen w-60 flex-col items-center bg-black px-2'>
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
