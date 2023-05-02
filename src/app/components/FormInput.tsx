import { FC, useState } from "react";

interface Props {
  label: string;
  errorMsg: string;
  id: string;
  onChange: (e: any) => void;
}

const FormInput: FC<Props> = ({ label, errorMsg, onChange, id, ...inputProps }) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = (e: any) => {
    setFocus(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} focus={focus.toString()} />
      <span className="error-msg">{errorMsg}</span>
    </div>
  );
};

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
export default FormInput;
