import courseApi from '@/apis/course.api';
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import { Textarea } from '@/components/ui/textarea';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  courseName: string;
  message: string;
}
export default function Notification() {
  const { register, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      courseName: 'Tất cả',
      message: ''
    }
  });
  const { data: courseNameData, isLoading } = useQuery({
    queryKey: ['courses'],
    queryFn: () => courseApi.getCourseName()
  });

  let courseNames: string[] = courseNameData?.data.doc || ['Tất cả'];

  useEffect(() => {
    if (courseNameData) {
      courseNames = ['Tất cả', ...courseNameData?.data.doc];
    }
  }, [courseNameData]);
  const onSubmit = handleSubmit(data => {});

  return (
    <form onSubmit={onSubmit}>
      <Header header='Thông báo' />
      {!isLoading && (
        <>
          <div>
            <label className='font-semibold' htmlFor='courses'>
              Gửi đến:
            </label>
            <select
              id='courses'
              className='ml-2 h-8 w-36 rounded-md border border-gray-400 pl-2 text-sm font-normal text-gray-900 focus:outline-none'
              {...register('courseName')}
            >
              <option value='Tất cả'>Tất cả</option>
              {courseNames?.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
          <label htmlFor='message' className='my-4 block font-semibold'>
            Nội dung
          </label>
        </>
      )}
      <Textarea placeholder='Nhập nội dung thông báo mới' id='message' className='h-80' />
      <Button className='mt-4 w-32' variant={'default'}>
        Gửi
      </Button>
    </form>
  );
}
