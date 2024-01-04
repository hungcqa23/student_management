import { useState } from 'react';
import Search from '../../components/Search';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function Course() {
  const [filter, setFilter] = useState<string>('');
  const navigate = useNavigate();

  return (
    <>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold uppercase text-black'>Lớp học</h1>
        <Button variant={'outline'} onClick={() => navigate('add-course')}>
          <span className='text-slate-900'>Tạo lớp mới</span>
        </Button>
      </div>

      <Search onChange={setFilter} query={filter} />
    </>
  );
}
