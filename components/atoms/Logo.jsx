import Image from 'next/image';
import PropTypes from 'prop-types';
// import Image from '../Image/Image';

const Logo = ({ src, alt, href }) => {
  return (
    <div>
      {LogoData.map((item) => {
        return (
          <a className='w-[150px] block' key={item.href} href={item.href}>
            <Image width={150} height={100} src={item.src} alt={item.alt} />
          </a>
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