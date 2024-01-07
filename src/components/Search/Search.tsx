import { useEffect } from 'react';
export default function Search({
  query,
  onChange,
  placeholder
}: {
  query?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onChange('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onChange]);
  return (
    <div className='flex w-72 justify-between rounded-lg border-2 border-black bg-white px-4 py-2 text-base font-normal outline-none transition duration-500'>
      <div className='flex w-full items-center'>
        <input
          value={query}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder || 'Search...'}
          className='grow bg-white text-sm text-black outline-none focus:outline-none'
          maxLength={100}
        />
        {query === '' && (
          <span className='flex h-5 shrink-0 items-center justify-center border-l border-gray-200 pl-2'>
            <img src='/src/assets/icons/search.png' alt='' />
          </span>
        )}
      </div>

      {query !== '' && (
        <button
          className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-500'
          onClick={() => {
            onChange('');
          }}
        >
          <span>
            <svg
              className='h-3 w-3'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.4531 7.5L14.3594 11.4453C14.8672 11.9141 14.8672 12.6953 14.3594 13.1641L13.5 14.0234C13.0312 14.5312 12.25 14.5312 11.7812 14.0234L7.875 10.1172L3.92969 14.0234C3.46094 14.5312 2.67969 14.5312 2.21094 14.0234L1.35156 13.1641C0.84375 12.6953 0.84375 11.9141 1.35156 11.4453L5.25781 7.5L1.35156 3.59375C0.84375 3.125 0.84375 2.34375 1.35156 1.875L2.21094 1.01562C2.67969 0.507812 3.46094 0.507812 3.92969 1.01562L7.875 4.92188L11.7812 1.01562C12.25 0.507812 13.0312 0.507812 13.5 1.01562L14.3594 1.875C14.8672 2.34375 14.8672 3.125 14.3594 3.59375L10.4531 7.5Z'
                className='fill-white'
              />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
