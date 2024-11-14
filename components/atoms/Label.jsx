import PropTypes from 'prop-types';

const Label = ({ children, htmlFor, labelStyle }) => {



  return (
    <label htmlFor={htmlFor} className={labelStyle}>
      {children}
    </label>
  );
};


Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Label;