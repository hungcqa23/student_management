import { isActiveRoute } from '@/utils/utils';
import { NavLink, useLocation } from 'react-router-dom';

interface NavButtonProps {
  to: string;
  text: string;
  svg: string;
  svgActive: string;
}
export default function ButtonNav(props: NavButtonProps) {
  const { to, text, svg, svgActive } = props;
  const location = useLocation();
  const isActive = isActiveRoute(location.pathname, to);

  return (
    <NavLink to={to} className='flex h-7 items-center py-6 pl-7'>
      <div className='mr-3'>
        <img src={isActive ? svgActive : svg} alt={`${text} logo`} className='h-5 w-5' />
      </div>
      <p
        className={`text-base font-normal ${
          isActive ? 'font-semibold text-amber-300' : 'text-gray-400'
        }`}
      >
        {text}
      </p>
    </NavLink>
  );
}
