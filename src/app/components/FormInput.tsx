import React from "react";

export default function FormInput({ label, text, onChange, id, type, errorMsg }) {
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
