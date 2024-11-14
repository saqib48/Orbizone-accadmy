import PropTypes from "prop-types";
const Span = ({ level, children }) => {
    const SpanTag = `h${level}`;
    const getSpanStyles = (level) => {
        switch (level) {
            case "success":
                return "text-[23px] text-black font-[700] leading-[1.3em] tracking-[-2px]";
            case "footer":
                return " text-[16px] cursor-pointer text-[#8b8a8a]  font-normal";
            case "offers":
                return "text-[18px] text-black font-[500]  leading-[1em] ";
            case "overview":
                return "text-[30px] text-black font-[600] leading-[50px] leading-[50px]  ";
            case "work":
                return "text-[75px] text-black font-[800] pr-[3%] ";
            case "work2":
                return "text-[27px] font-[700] text-black whitespace-nowrap ";
            case "clintbox":
                return "text-[60px] font-[800] text-white  ";
            case "clint":
                return "text-[20px] font-[500] text-white  ";
            case "contact":
                return "text-[14px] font-[400] text-black  ";
            case "flow":
                return "text-[40px] font-[400] text-[#f35748]  ";
            default:
                return "text-lg"
        }

    }
    const SpanStyle = getSpanStyles(level);
    return <SpanTag className={SpanStyle}>{children}</SpanTag>
};
Span.PropTypes = {
    level: PropTypes.oneOf(["success", "footer", "3", "4", "5", "6"])
};
export default Span
