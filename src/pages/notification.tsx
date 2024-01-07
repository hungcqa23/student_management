import Dialog from '@/components/Dialog';
import Modal from '@/components/Modal';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const optionsClass = [
  {
    value: '0',
    label: 'Tất cả'
  },
  {
    value: '1',
    label: 'Giải tích'
  },
  {
    value: '2',
    label: 'CSDL'
  },
  {
    value: '3',
    label: 'Cấu trúc dữ liệu'
  }
];
export default function Notification() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <h1 className='mb-4 text-2xl font-bold uppercase text-black'>Thông báo</h1>
      <div>
        <label className='font-semibold' htmlFor='courses'>
          Gửi đến:
        </label>
        <select
          id='courses'
          name='courses'
          className='text-normal ml-2 h-9 w-40 rounded-md border border-slate-900 pl-2 text-gray-950 focus:outline-none'
        >
          {optionsClass.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <label htmlFor='message' className='my-4 block font-semibold'>
        Nội dung
      </label>
      <Textarea placeholder='Nhập nội dung thông báo mới' id='message' className='h-80' />
      <Dialog
        isOpen={openModal}
        setIsOpen={setOpenModal}
        renderDialog={
          <Modal header='Xác nhận'>
            <>
              <div className='text-center'>
                Bạn đã gửi thông báo thành công! Thông báo đã được gửi qua email của các học viên
              </div>
              <div className='mt-4 flex justify-center gap-2'>
                <Button variant={'outline'} onClick={() => setOpenModal(false)}>
                  OK
                </Button>
              </div>
            </>
          </Modal>
        }
      >
        <Button className='mt-2 w-24'>Gửi</Button>
      </Dialog>
    </>
  );
}
