import courseApi from '@/apis/course.api';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/datepicker';
import { hour_points } from '@/constants/date_point';
import { Cross2Icon } from '@radix-ui/react-icons';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import moment from 'moment';

const optionsDate = [
  {
    value: 'Monday',
    label: 'Thứ hai'
  },
  {
    value: 'Tuesday',
    label: 'Thứ ba'
  },
  {
    value: 'Wednesday',
    label: 'Thứ tư'
  },
  {
    value: 'Thursday',
    label: 'Thứ năm'
  },
  {
    value: 'Friday',
    label: 'Thứ sáu'
  },
  {
    value: 'Saturday',
    label: 'Thứ bảy'
  },
  {
    value: 'Sunday',
    label: 'Chủ nhật'
  }
];

interface FormData {
  courseId: string;
  courseName: string;
  courseStartDate: string;
  courseEndDate: string;
  sessions: number;
  tuitionFee: number;
  courseMoment: {
    dayOfWeek: string;
    timeStart: string;
    timeEnd: string;
  }[];
}
export default function AddCourse() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<FormData>({});
  const { fields, append, remove } = useFieldArray({
    name: 'courseMoment',
    shouldUnregister: true,
    control,
    rules: {
      required: 'Hãy chọn ít nhất 1 buổi'
    }
  });
  const addCourseMutation = useMutation({
    mutationFn: (data: {
      courseId: string;
      courseName: string;
      dateOfWeeks: string[];
      dateOfStart: string;
      status: string;
      sessions: number;
      tuitionFee: number;
    }) => courseApi.addCourse(data),
    onSuccess: () => {
      reset();
      setDate(undefined);
      toast.success('Thêm khoá học thành công');
    },
    onError: () => {
      toast.error('Thêm khoá học thất bại. Hãy kiểm tra thông tin');
    }
  });

  const onSubmit = handleSubmit((data: FormData) => {
    //Check if courseMoment has empty string
    if (
      data.courseMoment.some(m => m.dayOfWeek === '') ||
      data.courseMoment.some(m => m.timeStart === '') ||
      data.courseMoment.some(m => m.timeEnd === '')
    ) {
      return toast.error('Hãy điền đầy đủ thông tin');
    }
    const formattedDate = moment(date).format('DD/MM/YYYY');
    const status: string = Date.now() > date!.getTime() ? 'đang học' : 'chưa học';
    addCourseMutation.mutate({
      courseId: data.courseId,
      courseName: data.courseName,
      dateOfWeeks: data.courseMoment.map(m => {
        return `${m.dayOfWeek} ${m.timeStart} - ${m.timeEnd}`;
      }),
      dateOfStart: formattedDate,
      status: status,
      sessions: data.sessions,
      tuitionFee: Number(data.tuitionFee)
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold uppercase text-black'>Thông tin lớp học</h1>
        <Button className='w-32' variant={'outline'} type='submit'>
          Tạo lớp mới
        </Button>
      </div>

      <div className='flex gap-16'>
        <div className='w-1/2'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Mã lớp
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='first_name'
            className='block h-9 w-full rounded border border-gray-300 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='Nhập mã lớp'
            required
            {...register('courseId')}
          />
        </div>

        <div className='w-1/2'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Tên lớp
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            id='first_name'
            className='block h-9 w-full rounded border border-gray-300 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='Nhập tên lớp'
            required
            {...register('courseName')}
          />
        </div>
      </div>

      <div className='mt-6 flex gap-16'>
        <div className='w-1/3'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Số buổi học
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='number'
            id='first_name'
            className='block h-9 w-full rounded border border-gray-300 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='Nhập số buổi học'
            required
            min={1}
            {...register('sessions')}
          />
        </div>

        <div className='w-1/3'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Học phí
            <span className='text-red-500'>*</span>
          </label>
          <input
            type='number'
            id='first_name'
            className='block h-9 w-full rounded border border-gray-300 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='Nhập học phí...'
            required
            min={0}
            {...register('tuitionFee')}
          />
        </div>

        <div className='w-1/3'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Ngày bắt đầu
            <span className='text-red-500'>*</span>
          </label>
          <DatePicker date={date} setDate={setDate} />
        </div>
      </div>

      <span className='my-2 block text-sm font-medium text-gray-900'>
        Thời gian học trong tuần:
      </span>

      <ul className='flex max-h-64 flex-col gap-2 overflow-y-auto'>
        {fields.map((field, index) => (
          <div className='flex items-center gap-8' key={field.id}>
            <div className='flex items-center gap-2'>
              <label
                htmlFor='first_name'
                className='block text-sm font-medium text-gray-900 dark:text-white'
              >
                Ngày học:
              </label>
              <select
                className='h-8 w-32 rounded border border-gray-200 text-sm'
                {...register(`courseMoment.${index}.dayOfWeek`)}
              >
                <option disabled={true} value=''>
                  Chọn ngày
                </option>
                {optionsDate.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex items-center gap-2'>
              <label
                htmlFor='first_name'
                className='block text-sm font-medium text-gray-900 dark:text-white'
              >
                Giờ học:
              </label>

              <select
                className='h-8 w-32 rounded border border-gray-200 text-sm'
                {...register(`courseMoment.${index}.timeStart`)}
              >
                <option value='' disabled>
                  Chọn giờ học
                </option>
                {hour_points().map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className='flex items-center gap-2'>
              <label
                htmlFor='first_name'
                className='block text-sm font-medium text-gray-900 dark:text-white'
              >
                Giờ kết thúc:
              </label>
              <select
                className='h-8 w-32 rounded border border-gray-200 text-sm'
                {...register(`courseMoment.${index}.timeEnd`)}
              >
                <option value='' disabled>
                  Chọn giờ học
                </option>
                {hour_points().map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={() => remove(index)}
              size='icon'
              variant={'ghost'}
              className='h-8 w-8 shrink-0 rounded-full'
              type='button'
            >
              <Cross2Icon className='h-4 w-4' />
            </Button>
          </div>
        ))}
      </ul>

      <p className='my-2 block text-sm font-medium text-red-500'>
        {errors.courseMoment?.root?.message}
      </p>
      <Button
        onClick={() => append({ dayOfWeek: '', timeStart: '', timeEnd: '' })}
        className='mt-4 h-10 w-32 rounded-md font-semibold'
        type='button'
      >
        Thêm ngày học
      </Button>
    </form>
  );
}
