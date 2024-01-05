import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

const Card = ({ className, style, children }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Card;
