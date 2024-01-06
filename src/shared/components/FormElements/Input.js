import React, { useReducer, useEffect } from "react";
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

const Input = (props) => {
  const {
    id,
    label,
    element: elementType,
    type,
    placeholder,
    rows,
    validators,
    errorText,
    onInput,
    initialValue,
    initialIsValid,
  } = props;

  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue || "",
    isTouched: false,
    isValid: initialIsValid || false,
  });

  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

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
        value={value}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={value}
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
  onInput: PropTypes.func,
  initialValue: PropTypes.string,
  initialIsValid: PropTypes.bool,
};

export default Input;
