import { FC, useState } from "react";

interface Props {
  label: string;
  errorMsg: string;
  onChange: (e: any) => void;
}

const FormInput: FC<Props> = ({ label, errorMsg, onChange, ...inputProps }) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = (e: any) => {
    setFocus(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        className="form-input-field"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        id={focus.toString()}
      />
      <span className="error-msg">{errorMsg}</span>
    </div>
  );
};

export default FormInput;
