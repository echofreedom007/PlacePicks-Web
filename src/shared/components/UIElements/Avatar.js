import React from "react";
import PropTypes from "prop-types";

import "./Avatar.css";

const Avatar = ({ className, style, image, alt, width }) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  image: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
};

export default Avatar;
