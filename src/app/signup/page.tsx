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

  return (
    <div className="registration sec-cont">
      <form className="">
        <h2>Registrera dig</h2>
        <FormInput
          type="text"
          id="name"
          text="För- och efternamn"
          label="name"
          onChange={handleName}
        />
        <FormInput type="email" id={null} onChange={null} text="Email" label="Email" />
        <FormInput
          type="email"
          id="email"
          text="Bekräfta Email"
          label="cEmail"
          onChange={handleEmail}
        />
        <FormInput type="password" id={null} onChange={null} text="Lösenord" label="password" />
        <FormInput
          type="password"
          id="password"
          text="Bekräfta lösenord"
          label="cPassword"
          onChange={handlePass}
        />
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
