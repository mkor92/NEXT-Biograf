import React from "react";
import FormInput from "../components/FormInput";

export default function signup() {
  return (
    <div className="registration sec sec-cont">
      <form className="sec-cont">
        <h2>Registrera dig</h2>
        <FormInput label="För- och efternamn" />
        <FormInput label="Email" />
        <FormInput label="Bekräfta Email" />
        <FormInput label="Lösenord" />
        <FormInput label="Bekräfta lösenord" />
      </form>
    </div>
  );
}
