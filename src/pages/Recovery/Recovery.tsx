import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import { Link, useLocation } from 'react-router-dom';
import Students from './Students/Students';
import Courses from './Courses/Courses';

const filterButtons = [
  {
    label: 'Danh sách lớp',
    href: '/recovery',
    isMatch: true
  },
  {
    label: 'Danh sách học sinh',
    href: '/recovery/students',
    isMatch: false
  }
];
export default function Recovery() {
  const location = useLocation();
  filterButtons.forEach(button => {
    button.isMatch = location.pathname === button.href;
  });

  return (
    <>
      <Header header='Khôi phục' />
      <div className='flex gap-2'>
        {filterButtons.map(button => (
          <div className='relative' key={button.label}>
            <Button variant={'ghost'} className='rounded-none' asChild>
              <Link to={button.href}>{button.label}</Link>
            </Button>
            {button.isMatch && (
              <div className='border-bottom-2 absolute bottom-0 left-0 right-0 border-b border-gray-500' />
            )}
          </div>
        ))}
      </div>

      {location.pathname === '/recovery/students' && <Students />}
      {location.pathname === '/recovery' && <Courses />}
    </>
  );
}
