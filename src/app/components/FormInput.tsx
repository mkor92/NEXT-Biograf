import React from "react";

export default function FormInput({ label, text }) {
  return (
    <div className="formInput">
      <label htmlFor={label} className="text">
        {text}
      </label>
      <input type="text" id={label} className="form-input-field" />
    </div>
  );
}
