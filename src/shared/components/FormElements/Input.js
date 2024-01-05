import React, { useReducer } from "react";
import PropTypes from "prop-types";

import { validate } from "../../util/validators";

import "./Input.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };

    default:
      return state;
  }
};

const Input = ({
  id,
  label,
  element: elementType,
  type,
  placeholder,
  rows,
  validators,
  errorText,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });
  const changeHandler = (e) => {
    dispatch({ type: "CHANGE", val: e.target.value, validators: validators });
  };

  const touchHandler = (e) => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    elementType === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      } `}
    >
      <label htmlFor={id}>{label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p>}
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  element: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  validators: PropTypes.array,
  errorText: PropTypes.string,
};

export default Input;
