import { studentApi } from '@/apis/student.api';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import Header from '@/components/ui/header';
import { Textarea } from '@/components/ui/textarea';
import { useQueryString } from '@/hooks/useQueryString';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import moment from 'moment';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}
export default function AddStudent() {
  const [date, setDate] = useState<Date | undefined>(new Date('1999-01-01'));
  const { register, handleSubmit, reset } = useForm<FormData>({});
  const { courseId } = useQueryString();
  const { data: studentsData } = useQuery({
    queryKey: ['students', courseId],
    queryFn: () => studentApi.getAllStudentsByCourseId(courseId || '')
  });
  const queryClient = useQueryClient();

  const addStudentMutation = useMutation({
    mutationFn: (data: {
      studentId: string;
      fullName: string;
      email: string;
      phoneNumber: string;
      address: string;
      dateOfBirth: string;
    }) =>
      studentApi.addStudent({
        ...data,
        courseId
      }),
    onSuccess: () => {
      reset();
      setDate(new Date('1999-01-01'));
      queryClient.invalidateQueries({ queryKey: ['students', courseId] });
      toast.success('Thêm sinh viên thành công');
    },
    onError: () => {
      toast.error('Hãy kiểm tra lại thông tin chính xác!!');
    }
  });

  const numberOfStudents = studentsData?.data.data.doc.length || 0;

  let HV = 'HV';
  if (numberOfStudents < 10) {
    HV = 'HV00' + (numberOfStudents + 1);
  } else if (numberOfStudents < 100) {
    HV = 'HV0' + (numberOfStudents + 1);
  } else {
    HV = 'HV' + (numberOfStudents + 1);
  }

  const onSubmit = handleSubmit((data: FormData) => {
    const formattedDate = moment(date).format('DD/MM/YYYY');
    addStudentMutation.mutate({
      ...data,
      dateOfBirth: formattedDate,
      studentId: HV
    });
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
            <div className='w-1/3'>
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

            <div className='w-1/3'>
              <label
                htmlFor='first_name'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
              >
                Mã học viên
                <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='first_name'
                className='block h-9 w-full rounded border border-gray-300 p-2 text-sm font-normal text-gray-900 placeholder:text-gray-500'
                placeholder='Nhập mã học viên...'
                required
                value={HV}
                readOnly
              />
            </div>

            <div className='w-1/3'>
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

          <div className='w-full'>
            <label htmlFor='message' className='mb-2 block text-sm font-medium'>
              Địa chỉ liên lạc
              <span className='text-red-500'>*</span>
            </label>
            <Textarea
              placeholder='Nhập địa chỉ liên lạc...'
              id='message'
              className='h-24 w-full'
              {...register('address')}
            />
          </div>
        </section>

        <Button variant={'outline'} className='my-4' type='submit'>
          Thêm học viên
        </Button>
      </form>
    </>
  );
}
