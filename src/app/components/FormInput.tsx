import React from "react";

export default function FormInput({ label }) {
  return (
    <div className="formInput">
      <label htmlFor="" className="text">
        {label}
      </label>
      <input type="text" id={label} className="form-input-field" />
    </div>
  );
}
