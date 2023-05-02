"use client";
import { useState } from "react";
import FormInput from "../components/FormInput";
import Link from "next/link";

export default function signup() {
  const [regData, setRegData] = useState({
    name: String,
    email: String,
    password: String,
  });

  function handleName(e: any) {
    //console.log(e.target.id);
    e.preventDefault();
    setRegData({ ...regData, name: e.target.value });
  }
  function handleEmail(e: any) {
    e.preventDefault();
    setRegData({ ...regData, email: e.target.value });
  }

  function handlePass(e: any) {
    e.preventDefault();
    setRegData({ ...regData, password: e.target.value });
  }
  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "E-postadress",
      required: true,
    },
    {
      id: 3,
      name: "cEmail",
      type: "email",
      errorMessage: "It should be a valid email address!",
      label: "Bekräfta e-post",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Lösenord",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "cPassword",
      type: "password",
      placeholder: "Bekräfta lösenord",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  return (
    <div className="registration sec-cont">
      <form className="">
        <h2>Registrera dig</h2>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button
          className="primary-btn"
          onClick={() => {
            console.log(regData);
          }}>
          Registrera
        </button>
        <Link href="/" className="cancel-btn">
          Avbryt
        </Link>
      </form>
    </div>
  );
}
