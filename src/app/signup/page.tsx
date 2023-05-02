"use client";
import { useState } from "react";
import FormInput from "../components/FormInput";
import Link from "next/link";

export default function signup() {
  const [regData, setRegData] = useState({
    name: String,
    email: String,
    cEmail: String,
    password: String,
    cPassWord: String,
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMsg:
        "För- och efternamn borde vara mellan 3-30 tecken och får inte innehålla några specialtecken",
      label: "För- och efternamn",
      pattern: "^[A-ZÅÄÖa-zåäö]{3,30}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      errorMsg: "Du måste ange en giltig e-postadress",
      label: "E-postadress",
      required: true,
    },
    {
      id: 3,
      name: "cEmail",
      type: "email",
      errorMsg: "E-postadresserna stämmer inte överrens",
      label: "Bekräfta e-post",
      pattern: regData.email,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      errorMsg:
        "Lösenordet bör vara mellan 6-20 tecken långt och innehålla minst 1 bokstav, 1 siffra och 1 specialtecken!",
      label: "Lösenord",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "cPassword",
      type: "password",

      errorMsg: "Lösenorden stämmer inte överrens",
      label: "Bekräfta lösenord",
      pattern: regData.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = (e) => {
    setRegData({ ...regData, [e.target.name]: e.target.value });
  };

  return (
    <div className="registration sec-cont">
      <form onSubmit={handleSubmit}>
        <h2>Registrera dig</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={regData[input.name]}
            onChange={onChange}
            className="form-input-field"
          />
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
