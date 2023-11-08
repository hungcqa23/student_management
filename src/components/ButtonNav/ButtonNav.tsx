import { NavLink, useLocation } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  text: string;
  svg: string;
}
export default function ButtonNav(props: NavButtonProps) {
  const { to, text, svg } = props;
  const isActive = useLocation().pathname === to;

  return (
    <NavLink to={to} className='flex h-7 items-center py-6 pl-7'>
      <div className='mr-3'>
        <img src={svg} alt={`${text} logo`} className='h-5 w-5' />
      </div>
      <p
        className={`text-base font-normal text-gray-400 ${
          isActive ? 'font-bold text-amber-300' : ''
        }`}
      >
        {text}
      </p>
    </NavLink>
  );
}
