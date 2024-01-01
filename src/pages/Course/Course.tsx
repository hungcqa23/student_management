import { useState } from 'react';
import Search from '../../components/Search';
import { useNavigate } from 'react-router-dom';

export default function Course() {
  const [filter, setFilter] = useState<string>('');
  const navigate = useNavigate();

  return (
    <>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold uppercase text-black'>Lớp học</h1>
        <button
          className='relative h-10 w-36 rounded-md bg-green-300'
          onClick={() => navigate('add-course')}
        >
          <span className='text-base font-extrabold text-zinc-900'>Tạo lớp mới</span>
        </button>
      </div>

      <Search onChange={setFilter} query={filter} />
    </>
  );
}
