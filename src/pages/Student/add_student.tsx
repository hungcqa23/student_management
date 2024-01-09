import { studentApi } from '@/apis/student.api';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import Header from '@/components/ui/header';
import { Textarea } from '@/components/ui/textarea';
import { useQueryString } from '@/hooks/useQueryString';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useMatch, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  studentId: string;
  status: string;
}

const options = [
  {
    value: 'đang học',
    label: 'Đang học'
  },
  {
    value: 'thôi học',
    label: 'Thôi học'
  }
];

export default function AddStudent() {
  const queryClient = useQueryClient();
  const isUpdate = useMatch('/students/add-student/:id');

  const [date, setDate] = useState<Date | undefined>(new Date('1999-01-01'));
  const { id } = useParams();
  const { register, handleSubmit, reset, setValue } = useForm<FormData>({});
  const { courseId } = useQueryString();
  const { data: studentsData } = useQuery({
    queryKey: ['students', courseId],
    queryFn: () => studentApi.getAllStudentsByCourseId(courseId || '')
  });
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

  const { data: studentData, isLoading } = useQuery({
    queryKey: ['students', id],
    queryFn: () => studentApi.getStudent(id || '')
  });
  const student = studentData?.data.data.doc;
  useEffect(() => {
    if (student && isUpdate) {
      setValue('fullName', student.fullName);
      setValue('email', student.email);
      setValue('phoneNumber', student.phoneNumber);
      setValue('address', student.address);
      setValue('studentId', student.studentId);
      setValue('status', student.status);
    }
  }, [studentData]);
  const updateStudentMutation = useMutation({
    mutationFn: (data: {
      fullName: string;
      email: string;
      phoneNumber: string;
      address: string;
      dateOfBirth: string;
      status: string;
    }) =>
      studentApi.updateStudent({
        id: id || '',
        ...data
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['students'] });
      toast.success('Cập nhật sinh viên thành công');
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
    if (isUpdate) {
      updateStudentMutation.mutate({
        ...data,
        dateOfBirth: moment(date).format('DD/MM/YYYY')
      });
    } else {
      const formattedDate = moment(date).format('DD/MM/YYYY');
      addStudentMutation.mutate({
        ...data,
        dateOfBirth: formattedDate,
        studentId: HV
      });
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='flex justify-between'>
          <Header header='Thông tin học viên' />
        </div>

        <section className='flex flex-col gap-4'>
          <div className='flex w-full gap-8'>
            <div
              className={clsx('', {
                'w-1/2': !isUpdate,
                'w-1/3': isUpdate
              })}
            >
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

            <div
              className={clsx('', {
                'w-1/2': !isUpdate,
                'w-1/3': isUpdate
              })}
            >
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

            <div
              className={clsx('w-1/3', {
                hidden: !isUpdate
              })}
            >
              <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                Trạng thái
              </label>
              <select
                id='status'
                className='h-9 w-full rounded border border-gray-300 pl-2 text-sm font-normal text-gray-900 focus:outline-none'
                {...register('status')}
              >
                {options.map(option => (
                  <option key={option.value} value={option.value} className='text-sm font-medium'>
                    {option.label}
                  </option>
                ))}
              </select>
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
                {...register('studentId')}
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
          {isUpdate ? 'Cập nhật học sinh' : 'Thêm học viên'}
        </Button>
      </form>
    </>
  );
}
