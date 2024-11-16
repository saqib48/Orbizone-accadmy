import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link'
// import Image from '../Image/Image';

const Logo = ({ src, alt }) => {
  return (
    <div>
      {LogoData.map((item) => {
        return (
          <Link className='w-[150px] block' key={item.href} href='/'>
            <Image width={150} height={100} src={item.src} alt={item.alt} />
          </Link>
        )
      })}
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  href: PropTypes.string,
};

const LogoData = [
  {
    href: '#',
    src: '/assits/images/logo1.png',
    alt: 'logo'
  }
]

export default Logo;