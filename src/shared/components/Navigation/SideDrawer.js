import React from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import "./SideDrawer.css";

const SideDrawer = ({ show, onClick, children }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );
  return ReactDom.createPortal(content, document.getElementById("drawer-hook"));
};

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.element,
};

export default SideDrawer;
