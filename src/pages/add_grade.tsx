import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';

export default function AddGrade() {
  return (
    <>
      <Header header='Nhập điểm' />
      {/* Class Info */}
      <div className='mb-2 flex justify-between'>
        <div className='flex flex-col gap-2'>
          <p>
            Tên lớp: <span className='font-bold'>GT16</span>
          </p>
          <p>
            Mã lớp: <span className='font-bold'>GK001</span>
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
              <br /> Thứ Ba (8:30 - 13:30)
            </span>
          </p>
        </div>
      </div>
      {/* Add Grade */}
      <div className='my-2 flex'>
        <Button className='ml-auto' variant={'outline'}>
          Sửa cột điểm
        </Button>
      </div>
      {/* Table */}
      <table className='flex'>
        <div className='flex w-[35rem] flex-col'>
          <div className='mb-8 flex gap-10 font-semibold text-gray-900'>
            <span className='shrink-0 basis-9 text-center'>STT</span>
            <span className='shrink-0 basis-24'>Mã học viên</span>
            <span className='shrink-0 basis-52'>Họ và tên</span>
            <span className='shrink-0 basis-28 text-center'>Số buổi vắng</span>
          </div>

          <div className='flex gap-10'>
            <span className='basis-9 text-center text-gray-900'>1</span>
            <span className='basis-24 text-gray-900'>HV001</span>
            <span className='basis-60 text-gray-900'>Nguyễn Thanh Huy</span>
            <span className='basis-20 text-center text-gray-900'>5</span>
          </div>
        </div>

        <div className='ml-2 flex max-w-lg flex-grow flex-col justify-between overflow-x-auto'>
          <div className='flex min-w-fit gap-10 overflow-x-hidden font-semibold text-gray-900'>
            <span className='shrink-0 basis-24 text-center'>17/9/2003</span>
            <span className='shrink-0 basis-24 text-center'>17/9/2003</span>
            <span className='shrink-0 basis-24 text-center'>17/9/2003</span>
          </div>

          <div className='flex min-w-fit gap-10 overflow-x-hidden font-semibold text-gray-900'>
            <input
              type='checkbox'
              className='h-4 w-4 shrink-0 basis-24 rounded border-gray-200 text-blue-600'
            />
            <input
              type='checkbox'
              className='h-4 w-4 shrink-0 basis-24 rounded border-gray-200 text-blue-600'
            />
            <input
              type='checkbox'
              className='h-4 w-4 shrink-0 basis-24 rounded border-gray-200 text-blue-600'
            />
          </div>
        </div>
      </table>
    </>
  );
}
