import { useState } from 'react';
import Search from '../../components/Search';

export default function Home() {
  const [filter, setFilter] = useState<string>('');
  return (
    <>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold uppercase text-black'>Lớp học</h1>
        <button className='relative h-10 w-36 rounded-md bg-green-300'>
          <div className='text-base font-extrabold text-zinc-900'>Tạo lớp mới</div>
        </button>
      </div>

      <Search onChange={setFilter} query={filter} />
    </>
  );
}
