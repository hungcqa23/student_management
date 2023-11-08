import Button from '../Button';

type Role = 'Nhân sự' | 'Giảng viên';
interface NotificationItemProps {
  role: Role;
}
export default function NotificationItem(props: NotificationItemProps) {
  const { role } = props;

  return (
    <div className='rounded-lg bg-gray-800 px-4 py-3'>
      <p className='text-base tracking-tighter text-white'>Thông báo học phí năm học 2023 - 2024</p>

      <div
        className={`py mb-3 mt-2 w-fit rounded-full border-4 ${
          role === 'Nhân sự' ? 'border-yellow-700 bg-yellow-900' : 'border-violet-700 bg-violet-900'
        } px-2`}
      >
        <span className='text-sm font-medium text-white'>{role}</span>
      </div>
      <div className=' flex items-center justify-between'>
        <div>
          <span className='mr-2 text-sm text-gray-500'>18:00</span>
          <span className='text-base text-white'>22-10-2023</span>
        </div>

        <Button
          className={`text-block font-base py rounded-lg  ${
            role === 'Nhân sự' ? 'bg-amber-400' : 'bg-violet-400'
          } px-3 font-bold`}
        >
          Xem
        </Button>
      </div>
    </div>
  );
}
