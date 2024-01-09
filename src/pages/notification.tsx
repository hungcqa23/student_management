import courseApi from '@/apis/course.api';
import Spinner from '@/components/Spinner';
import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header';
import { Textarea } from '@/components/ui/textarea';
import { ReloadIcon } from '@radix-ui/react-icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormData {
  message: string;
}
export default function Notification() {
  const [courseNames, setCourseNames] = useState<string[]>(['Tất cả']);
  const [courseName, setCourseName] = useState<string>('Tất cả');
  const [courseId, setCourseId] = useState<string>('');
  const { register, handleSubmit, getValues, reset } = useForm<FormData>({
    defaultValues: {
      message: ''
    }
  });
  const { data: courseNameData, isLoading } = useQuery({
    queryKey: ['course-name'],
    queryFn: () => courseApi.getCourseName()
  });
  const { data: courseIdsData, isLoading: isLoadingCourseIds } = useQuery({
    queryKey: ['courseIds', courseName],
    queryFn: () => courseApi.getCourseIds(courseName)
  });
  const courseIds = courseIdsData?.data.courseIds;

  useEffect(() => {
    if (courseNameData) {
      setCourseNames(['Tất cả', ...courseNameData?.data.doc]);
    }
  }, [courseNameData]);

  useEffect(() => {
    if (courseIds) {
      setCourseId(courseIds[0]);
    }
  }, [courseIds]);

  const notifyMutation = useMutation({
    mutationFn: (data: { courseName: string; message?: string; courseId?: string }) =>
      courseApi.notify(data),
    onSuccess: () => {
      toast.success('Gửi thông báo thành công', {
        position: 'top-center'
      });
      setCourseName('Tất cả');
      setCourseId('');
      reset();
    },
    onError: () => {
      toast.error('Gửi thông báo thất bại', {
        position: 'top-center'
      });
    }
  });

  const onSubmit = handleSubmit(data => {
    if (getValues('message') === '') {
      return toast.error('Vui lòng nhập nội dung thông báo!!', {
        position: 'top-center'
      });
    }

    if (courseName === 'Tất cả') {
      notifyMutation.mutate({
        courseName: 'Tất cả',
        message: getValues('message')
      });
    } else {
      notifyMutation.mutate({
        courseName,
        courseId,
        message: getValues('message')
      });
    }
  });

  return (
    <form onSubmit={onSubmit}>
      <Header header='Thông báo' />
      {!isLoading && (
        <>
          <div className='flex gap-4'>
            <div>
              <label className='font-semibold' htmlFor='courses'>
                Gửi đến:
              </label>
              <select
                id='courses'
                className='ml-2 h-8 w-36 rounded-md border border-gray-400 pl-2 text-sm font-normal text-gray-900 focus:outline-none'
                value={courseName}
                onChange={e => setCourseName(e.target.value)}
              >
                {courseNames?.map((course, index) => (
                  <option key={index} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {!isLoadingCourseIds && courseIds && courseName !== 'Tất cả' && (
              <div>
                <label className='font-semibold' htmlFor='courseId'>
                  Mã lớp:
                </label>
                <select
                  id='courseId'
                  className='ml-2 h-8 w-36 rounded-md border border-gray-400 pl-2 text-sm font-normal text-gray-900 focus:outline-none'
                  value={courseId}
                  onChange={e => setCourseId(e.target.value)}
                >
                  {courseIds?.map((courseId, index) => (
                    <option key={index} value={courseId}>
                      {courseId}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <label htmlFor='message' className='my-4 block font-semibold'>
            Nội dung
          </label>
        </>
      )}
      {isLoading && <Spinner />}
      <Textarea
        placeholder='Nhập nội dung thông báo mới'
        id='message'
        className='h-80'
        {...register('message')}
      />
      <Button className='mt-4 w-32' variant={'default'} disabled={notifyMutation.isPending}>
        {notifyMutation.isPending ? <ReloadIcon className='mr-2 h-4 w-4 animate-spin' /> : 'Gửi'}
      </Button>
    </form>
  );
}
