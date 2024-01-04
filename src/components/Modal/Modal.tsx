import clsx from 'clsx';

interface Props {
  header?: string;
  onCloseModal?: () => void;
  children: React.ReactNode;
  classNameModal?: string;
  type?: 'default' | 'option';
}
export default function Modal({
  header,
  onCloseModal,
  children,
  type = 'default',
  classNameModal = 'flex min-h-[8rem] md:w-[26rem] w-96 flex-col justify-between rounded-lg bg-white shadow p-5'
}: Props) {
  if (type === 'option') {
    return (
      <div className='text-normal flex min-h-[2rem] w-80 flex-col  rounded-lg bg-white text-base font-normal text-black md:w-96'>
        {children}
        <button
          onClick={onCloseModal}
          className={clsx('text-normal p-3 font-normal', {
            'border-t border-gray-300': children
          })}
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className={classNameModal}>
      <header className='relative mb-2 flex items-center justify-center font-semibold uppercase'>
        {header}
      </header>
      <div className='flex-grow'>{children}</div>
    </div>
  );
}
