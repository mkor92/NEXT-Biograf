import React from "react";
import FormInput from "../components/FormInput";

export default function signup() {
  return (
    <div className="registration sec-cont">
      <form className="">
        <h2>Registrera dig</h2>
        <FormInput text="För- och efternamn" label="name" />
        <FormInput text="Email" label="Email" />
        <FormInput text="Bekräfta Email" label="cEmail" />
        <FormInput text="Lösenord" label="password" />
        <FormInput text="Bekräfta lösenord" label="cPassword" />
        <button className="primary-btn">Registrera</button>
      </form>
    </div>
  );
}
