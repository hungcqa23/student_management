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
export default function AddCourse() {
  return (
    <>
      <div className='mb-4 flex items-center justify-between'>
        <h1 className='text-2xl font-bold uppercase text-black'>Thông tin lớp học</h1>
        <button className='relative h-10 w-36 rounded-md bg-green-300'>
          <div className='text-base font-extrabold text-zinc-900'>Tạo lớp</div>
        </button>
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
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
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
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
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
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
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
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
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
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
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
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500'
            placeholder='John'
            required
          />
        </div>
      </div>

      <span className='my-2 block text-sm font-medium text-gray-900'>Thời gian học</span>

      <ul className='flex flex-col gap-2'>
        <div className='flex gap-10'>
          <div className='flex items-center gap-2'>
            <label
              htmlFor='first_name'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
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
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
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
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
              <option value='volvo'>Volvo</option>
              <option value='saab'>Saab</option>
              <option value='fiat'>Fiat</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='flex items-center gap-2'>
            <label
              htmlFor='first_name'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
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
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
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
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
              <option value='volvo'>Volvo</option>
              <option value='saab'>Saab</option>
              <option value='fiat'>Fiat</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='flex items-center gap-2'>
            <label
              htmlFor='first_name'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
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
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
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
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
              <option value='volvo'>Volvo</option>
              <option value='saab'>Saab</option>
              <option value='fiat'>Fiat</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='flex items-center gap-2'>
            <label
              htmlFor='first_name'
              className='block text-sm font-medium text-gray-900 dark:text-white'
            >
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
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
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
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
              Ngày học:
            </label>
            <select id='cars' name='cars' className='h-10 w-36 rounded border-2 border-gray-200'>
              <option value='volvo'>Volvo</option>
              <option value='saab'>Saab</option>
              <option value='fiat'>Fiat</option>
              <option value='audi'>Audi</option>
            </select>
          </div>
        </div>
      </ul>

      <button className='mt-4 h-10 w-32 rounded-md bg-yellow-500 font-semibold text-black  hover:opacity-90'>
        Thêm ngày học
      </button>
    </>
  );
}
