import React from "react";
import ReactDom from "react-dom";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

import Backdrop from "./Backdrop";

import "./Modal.css";

const ModalOverlay = (props) => {
  const {
    className,
    style,
    headerClass,
    header,
    onSubmit,
    contentClass,
    children,
    footerClass,
    footer,
  } = props;
  const content = (
    <div className={`modal ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
        <div className={`modal__content ${contentClass}`}>{children}</div>
        <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
      </form>
    </div>
  );

  return ReactDom.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  const { show, onCancel } = props;
  return (
    <React.Fragment>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition
        in={show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  onCancel: PropTypes.func,
};

ModalOverlay.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  headerClass: PropTypes.string,
  header: PropTypes.string,
  onSubmit: PropTypes.func,
  contentClass: PropTypes.string,
  children: PropTypes.any,
  footerClass: PropTypes.string,
  footer: PropTypes.any,
};

export default Modal;
