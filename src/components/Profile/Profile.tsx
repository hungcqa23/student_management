import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  classNameImage?: string;
  to?: string;
  src?: string;
}
export default function Profile(props: Props) {
  const {
    className = 'h-10 w-10',
    classNameImage = 'rounded-full h-10 w-10 object-cover',
    src = '/src/assets/images/Avatar.svg',
    to = '/'
  } = props;

  return (
    <Link to={to} className={className}>
      <img src={src} alt='Profile User' className={classNameImage} />
    </Link>
  );
}
