import { useState } from "react";
import { deepClone, isObjEmpty } from "../utils/object-utils";

const useForm = ({ init, validate }) => {
  const [state, setState] = useState(mapValuesToState(init));

  const handleChange = (e) => {
    const { name: key, value } = e.target;

    const oldState = deepClone(state);

    oldState[key].value = value;

    const { errors } = getErrors();
    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }

    setState(oldState);
  };

  const handleFocus = (e) => {
    const { name } = e.target;

    const oldState = deepClone(state);
    oldState[name].touched = true;

    if (!oldState[name].touched) {
      oldState[name].touched = true;
    }
    setState(oldState);
  };

  const handleBlur = (e) => {
    const key = e.target.name;
    const { errors } = getErrors();

    const oldState = deepClone(state);
    if (oldState[key].touched && errors[key]) {
      oldState[key].error = errors[key];
    } else {
      oldState[key].error = "";
    }
    oldState[key].focused = false;
    setState(oldState);
  };

  const handleSubmit = (e, cb) => {
    e.preventDefault();
    const { errors, hasError, values } = getErrors();
    const oldState = deepClone(state);
    const newState = Object.keys(oldState).reduce((acc, key) => {
      acc[key] = {
        ...oldState[key],
        error: errors[key],
      };
      return acc;
    }, {});
    console.log(newState);
    cb({
      errors,
      hasError,
      values,
      touched: mapStateToKeys(state, "touched"),
      focused: mapStateToKeys(state, "focused"),
    });
    setState(newState);
  };
  const clear = () => {
    const newState = mapStateToKeys(state, true);
    setState(newState);
  };
  const getErrors = () => {
    let hasError = null,
      errors = null;

    const values = mapStateToKeys(state, "value");

    if (typeof validate === "boolean") {
      hasError = validate;

      errors = mapStateToKeys(state, "error");
    } else if (typeof validate === "function") {
      const errorsFromCB = validate(values);

      hasError = !isObjEmpty(errorsFromCB);
      errors = errorsFromCB;
    } else {
      throw new Error("validate property must be boolean or function");
    }
    return {
      errors,
      hasError,
      values,
    };
  };
  return {
    formState: state,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
    clear,
  };
};

export default useForm;

//helper function
const mapValuesToState = (values, shouldClear = false) => {
  return Object.keys(values).reduce((acc, key) => {
    acc[key] = {
      value: shouldClear ? "" : values[key],
      error: "",
      focused: false,
      touched: false,
    };
    return acc;
  }, {});
};

const mapStateToKeys = (state, key) => {
  return Object.keys(state).reduce((acc, cur) => {
    acc[cur] = state[cur][key];
    return acc;
  }, {});
};
