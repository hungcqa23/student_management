import { studentApi } from '@/apis/student.api';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import Header from '@/components/ui/header';
import { Textarea } from '@/components/ui/textarea';
import { useMutation } from '@tanstack/react-query';
import moment from 'moment';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  studentId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  fullNameRelative: string;
  phoneNumberRelative: string;
  addressRelative: string;
}
export default function AddStudent() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm<FormData>({});

  const addStudentMutation = useMutation({
    mutationFn: (data: {}) => studentApi.addStudent(data)
  });

  const onSubmit = handleSubmit((data: FormData) => {
    const formattedDate = moment(date).format('DD/MM/YYYY');
    const status: string = Date.now() > date!.getTime() ? 'đang học' : 'chưa học';
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='flex justify-between'>
          <Header header='Thông tin học viên' />
        </div>

        <section className='flex flex-col gap-4'>
          <div className='flex w-full gap-8'>
            <div className='w-1/2'>
              <label
                htmlFor='first_name'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Tên học viên
                <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='first_name'
                className='block h-9 w-full rounded border border-gray-300 p-2 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500'
                placeholder='Nhập tên học viên...'
                required
                {...register('fullName')}
              />
            </div>

            <div className='w-1/2'>
              <label
                htmlFor='first_name'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Email
                <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='first_name'
                className='block h-9 w-full rounded border border-gray-300 p-2 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500'
                placeholder='Nhập email...'
                required
                {...register('email')}
              />
            </div>
          </div>

          <div className='flex w-full gap-8'>
            <div className='w-1/2'>
              <label
                htmlFor='first_name'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Số điện thoại
                <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='first_name'
                className='block h-9 w-full rounded border border-gray-300 p-2 text-sm font-normal text-gray-900 placeholder:text-gray-500'
                placeholder='Nhập số điện thoại...'
                required
                {...register('phoneNumber')}
              />
            </div>

            <div className='w-1/2'>
              <label
                htmlFor='first_name'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Ngày sinh
                <span className='text-red-500'>*</span>
              </label>
              <DatePicker date={date} setDate={setDate} />
            </div>
          </div>

          <div>
            <label htmlFor='message' className='mb-2 block text-sm font-medium'>
              Địa chỉ liên lạc
            </label>
            <Textarea placeholder='Nhập địa chỉ liên lạc...' id='message' className='h-24 w-96' />
          </div>
        </section>

        <Button variant={'outline'} className='my-4'>
          Thêm học viên
        </Button>
      </form>
    </>
  );
}
