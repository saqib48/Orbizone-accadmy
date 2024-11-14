import PropTypes from 'prop-types';

const Paragraph = ({ children, variant = '' }) => {
  let paragraphStyle = "";

  switch (variant) {

    case "banner":
      paragraphStyle = " text-black text-[17px] font-[600] tracking-[1px] ";
      break;
    case "homepara":
      paragraphStyle = " cursor-pointer  leading-[25px] text-[#8b8a8a] text-[17px] font-medium ";
      break;
    case "imgs":
      paragraphStyle = "cursor-pointer pt-[2%] leading-[25px] text-[#8b8a8a] text-[14px] font-semibold";
      break;
    case "offer":
      paragraphStyle = " leading-[25px]  text-[16px] font-[400] mt-[20px]";
      break;
    case "danger":
      paragraphStyle = " leading-[25px] text-black  text-[16px] font-[500] tracking-wide ";
      break;
    case "contact":
      paragraphStyle = " leading-[25px] text-black pt-[2%] text-[14px] font-[500] tracking-wide ";
      break;
    case "HandyPara":
      paragraphStyle = " text-[#fff] font-light text-[18px] leading-7";
      break;
    case "tempara":
      paragraphStyle = " text-[#091736] text-[15px] font-[600] tracking-[1px] ";
      break;
    case "temperature":
      paragraphStyle = " leading-[25px] text-[#979FAE]  text-[16px] font-[500] tracking-wide ";
      break;
    case "Relaxpara":
      paragraphStyle = " leading-[25px] text-[#ffffff]  text-[16px] font-[500]  ";
      break;

      

    case "paraimg":
      paragraphStyle = " text-md font-[400] mt-2  text-white ";
      break;
      case "paraAbout1":
        paragraphStyle = "text-[17px] font-[400] leading-relaxed mt-3 mb-3 text-[#d1d5db]";
        break;

    case "paraAbout":
      paragraphStyle = "text-lg font-[400] leading-relaxed mt-4 mb-4 text-[#d1d5db] ";
      break;
      case "paraAbout2":
        paragraphStyle = "text-lg font-[400] leading-relaxed mt-2 mb-2 text-[#d1d5db] ";
        break;


    default:
      paragraphStyle = "";
  }

  return (
    <p className={paragraphStyle}>{children}</p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.string.isRequired
}


export default Paragraph;
