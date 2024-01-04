import authApi from '@/apis/auth.api';
import { Button } from '@/components/ui/button';
import { Cross1Icon, Cross2Icon } from '@radix-ui/react-icons';
import { useMutation } from '@tanstack/react-query';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const optionsDate = [
  {
    value: 'monday',
    label: 'Thứ hai'
  },
  {
    value: 'tuesday',
    label: 'Thứ ba'
  },
  {
    value: 'wednesday',
    label: 'Thứ tư'
  },
  {
    value: 'thursday',
    label: 'Thứ năm'
  },
  {
    value: 'friday',
    label: 'Thứ sáu'
  },
  {
    value: 'saturday',
    label: 'Thứ bảy'
  },
  {
    value: 'sunday',
    label: 'Chủ nhật'
  }
];
interface FormData {
  courseId: string;
  courseName: string;
  courseStartDate: string;
  courseEndDate: string;
  courseNumberOfSession: string;
  courseMoment: {
    dayOfWeek: string;
    timeStart: string;
    timeEnd: string;
  }[];
}
export default function AddCourse() {
  const {
    register,
    handleSubmit,
    control,
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
  const loginMutation = useMutation({
    mutationFn: (data: FormData) =>
      authApi.login({
        email: data.courseId,
        password: data.courseName
      })
  });

  const onSubmit = handleSubmit((data: FormData) => {
    loginMutation.mutate(data, {
      onSuccess: data => {
        toast.success('Successfully login!', {
          position: toast.POSITION.TOP_RIGHT
        });
      }
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
          </label>
          <input
            type='text'
            id='first_name'
            className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='John'
            required
          />
        </div>

        <div className='w-1/2'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Tên lớp
          </label>
          <input
            type='text'
            id='first_name'
            className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='John'
            required
          />
        </div>
      </div>

      <div className='mt-6 flex gap-16'>
        <div className='w-1/2'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Số buổi học
          </label>
          <input
            type='text'
            id='first_name'
            className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='John'
            required
          />
        </div>

        <div className='w-1/2'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Ngày bắt đầu
          </label>
          <input
            type='text'
            id='first_name'
            className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='John'
            required
          />
        </div>

        <div className='w-1/2'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Ngày kết thúc
          </label>
          <input
            type='text'
            id='first_name'
            className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='John'
            required
          />
        </div>
      </div>

      <div className='mt-6 flex gap-16'>
        <div className='w-1/2'>
          <label
            htmlFor='first_name'
            className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'
          >
            Số buổi học
          </label>
          <input
            type='text'
            id='first_name'
            className='block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='John'
            required
          />
        </div>
      </div>

      <span className='my-2 block text-sm font-medium text-gray-900'>Thời gian học</span>

      <ul className='flex max-h-40 flex-col gap-2 overflow-y-auto'>
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
                className='h-9 w-32 rounded border-2 border-gray-200 text-sm'
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
                className='h-9 w-32 rounded border-2 border-gray-200 text-sm'
                {...register(`courseMoment.${index}.timeStart`)}
              >
                <option value='' disabled>
                  Chọn giờ học
                </option>
                <option value='volvo'>Volvo</option>
                <option value='saab'>Saab</option>
                <option value='fiat'>Fiat</option>
                <option value='audi'>Audi</option>
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
                className='h-9 w-32 rounded border-2 border-gray-200 text-sm'
                {...register(`courseMoment.${index}.timeStart`)}
              >
                <option value='' disabled>
                  Chọn giờ học
                </option>
                <option value='volvo'>Volvo</option>
                <option value='saab'>Saab</option>
                <option value='fiat'>Fiat</option>
                <option value='audi'>Audi</option>
              </select>
            </div>

            <Button
              onClick={() => remove(index)}
              size='icon'
              variant={'ghost'}
              className='h-8 w-8 rounded-full'
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
