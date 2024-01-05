import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({
  size,
  inverse,
  danger,
  href,
  children,
  to,
  exact,
  type,
  onClick,
  disabled,
}) => {
  if (href) {
    return (
      <a
        className={`button button--${size || "default"} ${
          inverse && "button--inverse"
        } ${danger && "button--danger"}`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`button button--${size || "default"} ${
          inverse && "button--inverse"
        } ${danger && "button--danger"}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`button button--${size || "default"} ${
        inverse && "button--inverse"
      } ${danger && "button--danger"}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.string,
  inverse: PropTypes.bool,
  danger: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.any,
  to: PropTypes.string,
  exact: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;
