import React from "react";

export default function FormInput(props) {
  { label, errorMsg, onChange, id, ...inputProps } = props;
  return (
    <div className="formInput">
      <label htmlFor={label} className="text">
        {text}
      </label>
      <input type={type} id={id} className="form-input-field" onChange={onChange} />
      <span>{errorMsg}</span>
    </div>
  );
}


/*const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;*/