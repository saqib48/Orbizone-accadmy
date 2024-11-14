import PropTypes from "prop-types";

const Heading = ({ level, children, className }) => {
  const HeadingTag = `h${level}`;

  const getHeadingStyles = (level) => {
    switch (level) {
      case 1:
        return `xl:text-[30px] md:text-[20px] sm:text-[15px]  xl:font-[600] lg:font-[600] md:font-[600] sm:font-[600] font-[600] xl:leading-[70px] lg:leading-[60px] md:leading-normal sm:leading-normal leading-normal ${className}`;
      case 2:
        return `class="text-6xl md:text-7xl font-bold mb-5 text-gray-200" ${className}`;
      case 3:
        return `text-[40px] md:text-6xl capitalize font-bold mb-3 text-white ${className}`;
      case 4:
        return `text-[25px] text-white mt-4 font-[500]leading-[1.5em] tracking-[2px] ${className}`;
      case 5:
        return `text-[20px] text-white font-[500] leading-[1.5em] tracking-[2px] ${className}`;
      case 6:
        return `text-[14px] font-[400] leading-[1.5em] tracking-[2px] ${className}`;
      case 7:
        return "text-[16px] leading-[24px] font-semibold text-[#242424] ";
      default:
        return "text-lg";
    }
  };

  const headingStyle = getHeadingStyles(parseInt(level));

  return <HeadingTag className={headingStyle}>{children}</HeadingTag>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Heading;
