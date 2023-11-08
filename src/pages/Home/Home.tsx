import NotificationList from '../../components/NotificationList';

export default function Home() {
  return (
    <div className='flex'>
      <div className='h-full flex-grow bg-white'></div>
      <NotificationList />
    </div>
  );
}
