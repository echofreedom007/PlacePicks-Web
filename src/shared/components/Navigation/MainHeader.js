import React from "react";
import PropTypes from "prop-types";

import "./MainHeader.css";

const MainHeader = ({ children }) => {
  return <header className="main-header">{children}</header>;
};

MainHeader.propTypes = {
  children: PropTypes.any,
};

export default MainHeader;
