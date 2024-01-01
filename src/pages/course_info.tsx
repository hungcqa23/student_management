import Search from '@/components/Search';
import { SetStateAction, useState } from 'react';

export default function CourseInfo() {
  const [filter, setFilter] = useState<string>('');
  return (
    <>
      <h1 className='mb-4 text-2xl font-bold uppercase text-black'>Thông tin lớp học</h1>

      <div className='flex justify-between'>
        <div className='flex flex-col gap-2'>
          <p>
            Tên lớp: <span className='font-bold'>Giải tích 1 khóa 16</span>
          </p>
          <p>
            Mã lớp: <span className='font-bold'>GT16</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Sĩ số: <span className='font-bold'>16</span>
          </p>
          <p>
            Số buổi học: <span className='font-bold'>2</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Ngày bắt đầu: <span className='font-bold'>17/9/2023</span>
          </p>
          <p>
            Ngày kết thúc: <span className='font-bold'>17/9/2023</span>
          </p>
        </div>

        <div className='flex flex-col gap-2'>
          <p>
            Trạng thái: <span className='font-bold'>Đang học</span>
          </p>
          <p className='flex'>
            Thời gian học:{' '}
            <span className='ml-1 inline-block font-bold'>
              Chủ nhật(14:30 - 17:30)
              <br /> Thứ Ba (8:30 - 10:30)
            </span>
          </p>
        </div>
      </div>

      <Search onChange={setFilter} query={filter} />
    </>
  );
}
